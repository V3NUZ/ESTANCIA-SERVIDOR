'use client'

import { toast } from 'sonner'

export function useToastCustom() {
  const success = (message: string, description?: string) => {
    toast.success(message, {
      description,
      duration: 3000,
      position: 'top-right'
    })
  }

  const error = (message: string, description?: string) => {
    toast.error(message, {
      description,
      duration: 5000,
      position: 'top-right'
    })
  }

  const info = (message: string, description?: string) => {
    toast.info(message, {
      description,
      duration: 4000,
      position: 'top-right'
    })
  }

  const warning = (message: string, description?: string) => {
    toast.warning(message, {
      description,
      duration: 4000,
      position: 'top-right'
    })
  }

  const loading = (message: string) => {
    return toast.loading(message, {
      position: 'top-right'
    })
  }

  const dismiss = (id?: string | number) => {
    toast.dismiss(id)
  }

  const promise = <T>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string
      error: string
    }
  ) => {
    return toast.promise(promise, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
      position: 'top-right'
    })
  }

  return {
    success,
    error,
    info,
    warning,
    loading,
    dismiss,
    promise
  }
}