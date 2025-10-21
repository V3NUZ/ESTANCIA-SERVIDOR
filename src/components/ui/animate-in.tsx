'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>
}

export function AnimateIn({ 
  children, 
  delay = 0, 
  duration = 1000,
  className = '',
  as: Component = 'div'
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const ComponentToRender = Component

  if (typeof ComponentToRender === 'string') {
    return (
      <ComponentToRender
        className={cn(
          'transition-all ease-out',
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4',
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
        }}
      >
        {children}
      </ComponentToRender>
    )
  }

  return (
    <ComponentToRender
      className={cn(
        'transition-all ease-out',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </ComponentToRender>
  )
}