'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimateIn } from '@/components/ui/animate-in'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  delay?: number
  isActive?: boolean
  onClick?: () => void
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  delay = 0,
  isActive = false,
  onClick
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimateIn delay={delay}>
      <Card
        className={`
          relative overflow-hidden cursor-pointer transition-all duration-300
          ${isActive ? 'ring-2 ring-primary shadow-lg scale-105' : 'hover:shadow-md hover:scale-102'}
          ${isHovered ? 'shadow-xl' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <CardContent className="p-6">
          {badge && (
            <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
              {badge}
            </Badge>
          )}
          
          <div className={`
            transition-transform duration-300
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}>
            <Icon className="h-8 w-8 text-primary mb-4" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <div className={`
            absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `} />
        </CardContent>
      </Card>
    </AnimateIn>
  )
}