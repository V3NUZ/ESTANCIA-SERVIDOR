import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
  via?: string
}

export function GradientText({ 
  children, 
  className = '',
  from = 'from-primary',
  to = 'to-purple-600',
  via = ''
}: GradientTextProps) {
  return (
    <span
      className={cn(
        `bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent`,
        className
      )}
    >
      {children}
    </span>
  )
}