'use client'

import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Loading({ 
  message = "Cargando...", 
  size = 'md',
  className = ""
}: LoadingProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  if (!isClient) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className={`${sizeClasses[size]} border-2 border-gray-200 border-t-blue-600 rounded-full animate-spin`}></div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />
      {message && (
        <p className={`${textSizes[size]} text-gray-600 font-medium`}>
          {message}
        </p>
      )}
    </div>
  )
}

export function PageLoading({ message = "Cargando página..." }: { message?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Loading message={message} size="lg" />
    </div>
  )
}

export function CardLoading({ message = "Cargando..." }: { message?: string }) {
  return (
    <div className="flex items-center justify-center p-8">
      <Loading message={message} size="md" />
    </div>
  )
}