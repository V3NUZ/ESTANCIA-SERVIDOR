'use client'

import { useState, useCallback } from 'react'

interface LoadingState {
  [key: string]: boolean
}

export function useLoading() {
  const [loadingStates, setLoadingStates] = useState<LoadingState>({})

  const setLoading = useCallback((key: string, isLoading: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: isLoading
    }))
  }, [])

  const isLoading = useCallback((key: string) => {
    return loadingStates[key] || false
  }, [loadingStates])

  const withLoading = useCallback(async <T>(
    key: string,
    asyncFn: () => Promise<T>
  ): Promise<T> => {
    try {
      setLoading(key, true)
      return await asyncFn()
    } finally {
      setLoading(key, false)
    }
  }, [setLoading])

  const clearAllLoading = useCallback(() => {
    setLoadingStates({})
  }, [])

  const hasAnyLoading = Object.values(loadingStates).some(Boolean)

  return {
    setLoading,
    isLoading,
    withLoading,
    clearAllLoading,
    hasAnyLoading,
    loadingStates
  }
}