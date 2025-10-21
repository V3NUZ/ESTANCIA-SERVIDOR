'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function BackButton({ 
  href, 
  label = "Atrás", 
  className = "",
  variant = "outline",
  size = "default"
}: BackButtonProps) {
  const router = useRouter()

  const handleClick = useCallback(() => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }, [router, href])

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      {label}
    </Button>
  )
}