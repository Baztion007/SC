import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogoImage } from '@/components/logo-image'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <LogoImage variant="header" />
      <div className="space-y-3">
        <p className="font-serif text-7xl font-semibold text-primary">404</p>
        <h1 className="font-serif text-2xl font-semibold sm:text-3xl">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="max-w-md text-sm text-muted-foreground text-pretty">
          The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s get you
          back on solid ground.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  )
}
