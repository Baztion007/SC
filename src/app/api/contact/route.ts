import { NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const contactSchema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email().max(254),
  phone: z.string().max(40).optional().or(z.literal('')),
  timing: z.string().max(80).optional().or(z.literal('')),
  budget: z.string().max(80).optional().or(z.literal('')),
  message: z.string().min(10).max(5000),
})

// Simple in-memory rate limiting (per IP) - prevents spam without external deps.
// Resets every 10 minutes; allows 5 submissions per window per IP.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const rateMap = new Map<string, { count: number; firstAt: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now - entry.firstAt > WINDOW_MS) {
    rateMap.set(ip, { count: 1, firstAt: now })
    return true
  }
  if (entry.count >= MAX_PER_WINDOW) return false
  entry.count += 1
  return true
}

// Basic honeypot field support — if `website` is filled, treat as spam.
const honeypotSchema = z.object({
  website: z.string().max(0).optional().or(z.literal('')),
})

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // Honeypot check
    const honeypot = honeypotSchema.safeParse({ website: (body as any).website ?? '' })
    if (!honeypot.success) {
      // Pretend success to not tip off the bot
      return NextResponse.json({ ok: true, spam: true })
    }

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
        { status: 422 }
      )
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown'

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    const userAgent = req.headers.get('user-agent')?.slice(0, 500) ?? null

    // Persist to database
    const submission = await db.contactSubmission.create({
      data: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        timing: parsed.data.timing || null,
        budget: parsed.data.budget || null,
        message: parsed.data.message,
        ip: ip === 'unknown' ? null : ip,
        userAgent,
      },
    })

    // Fire-and-forget email notification (if configured).
    // Uses no external service so it works on any host (Netlify, Cloudflare, GitHub Pages w/ serverless).
    // For production, set NOTIFY_EMAIL + an SMTP/transactional provider.
    notifyTeam(parsed.data).catch((err) => {
      console.error('[contact] notification failed:', err)
    })

    return NextResponse.json({ ok: true, id: submission.id })
  } catch (err) {
    console.error('[contact] submission error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}

// GET returns a simple health-check payload (also useful for uptime monitors).
export async function GET() {
  return NextResponse.json({ ok: true, service: 'spruce-contact' })
}

// Lightweight notification stub.
// In production, swap the body for a real transport (Resend, Postmark, SES, SMTP).
// Leaving as a console log keeps the build portable across Netlify, Cloudflare, GitHub Actions.
async function notifyTeam(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  timing?: string
  budget?: string
  message: string
}) {
  const notifyEmail = process.env.NOTIFY_EMAIL
  const subject = `New Spruce Construction inquiry from ${data.firstName} ${data.lastName}`
  const text = [
    `New contact form submission:`,
    ``,
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.timing ? `Timing: ${data.timing}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    ``,
    `Message:`,
    data.message,
  ]
    .filter(Boolean)
    .join('\n')

  if (notifyEmail) {
    // Hook for a real provider goes here. Examples:
    //   await fetch('https://api.resend.com/emails', { ... })
    //   await transporter.sendMail({ ... })
    console.log(`[contact] would notify ${notifyEmail}: ${subject}`)
  } else {
    console.log(`[contact] new submission:\n${text}`)
  }
}
