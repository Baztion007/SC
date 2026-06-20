import { LogoImage } from '@/components/logo-image'

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
      <LogoImage variant="header" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="size-2 animate-pulse rounded-full bg-primary" />
        <span className="size-2 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
        <span className="size-2 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
        <span className="ml-2">Loading...</span>
      </div>
    </div>
  )
}
