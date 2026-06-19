'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Check } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

const timingOptions = [
  'ASAP',
  'Within 3 months',
  '3-6 months',
  '6-12 months',
  '12+ months',
  'Just exploring',
]

const budgetOptions = [
  'Under $250k',
  '$250k - $500k',
  '$500k - $750k',
  '$750k - $1M',
  '$1M - $2M',
  '$2M+',
  'Prefer to discuss',
]

const schema = z.object({
  firstName: z.string().min(1, 'First name is required').max(80),
  lastName: z.string().min(1, 'Last name is required').max(80),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  phone: z.string().max(40).optional().or(z.literal('')),
  timing: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please tell us a bit more about your project (at least 10 characters)')
    .max(5000),
})

type ContactFormValues = z.infer<typeof schema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      timing: '',
      budget: '',
      message: '',
    },
  })

  const timing = watch('timing')
  const budget = watch('budget')

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Submission failed')
      }
      toast.success('Thank you! We will be in touch shortly.')
      setSubmitted(true)
      reset()
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      toast.error(message)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
          <Check className="size-7 text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl font-semibold">Thank you for reaching out.</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Your message is on its way to our team. We will be in touch shortly to schedule a
          discovery call.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
          <Input
            id="firstName"
            autoComplete="given-name"
            placeholder="Jane"
            aria-invalid={!!errors.firstName}
            {...register('firstName')}
          />
        </Field>
        <Field label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
          <Input
            id="lastName"
            autoComplete="family-name"
            placeholder="Doe"
            aria-invalid={!!errors.lastName}
            {...register('lastName')}
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" required error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
      </Field>

      <Field label="Phone" htmlFor="phone" error={errors.phone?.message} optional>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(804) 555-0100"
          {...register('phone')}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="What is your timing?" htmlFor="timing" optional>
          <Select
            value={timing}
            onValueChange={(v) => setValue('timing', v, { shouldValidate: false })}
          >
            <SelectTrigger id="timing" className="w-full">
              <SelectValue placeholder="Select timing" />
            </SelectTrigger>
            <SelectContent>
              {timingOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="What is your budget?" htmlFor="budget" optional>
          <Select
            value={budget}
            onValueChange={(v) => setValue('budget', v, { shouldValidate: false })}
          >
            <SelectTrigger id="budget" className="w-full">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field
        label="Message"
        htmlFor="message"
        required
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your home, your vision, and what you're hoping to build..."
          aria-invalid={!!errors.message}
          {...register('message')}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit'
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We respect your privacy. Your information is only used to respond to your inquiry.
      </p>
    </form>
  )
}

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  optional?: boolean
  error?: string
  children: React.ReactNode
}

function Field({ label, htmlFor, required, optional, error, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="flex items-center gap-1 text-sm font-medium">
        {label}
        {required && <span className="text-primary" aria-hidden="true">*</span>}
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">(optional)</span>
        )}
      </Label>
      {children}
      {error && (
        <p className={cn('text-xs text-destructive')} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
