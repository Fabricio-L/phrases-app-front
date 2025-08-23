import React, { useState, useCallback } from 'react'
import type { ToastProps, ToastType } from './ToastContext'
import { ToastContext } from './ToastContext'
import Toast from '../components/atoms/Toast'

let toastId = 0

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const addToast = useCallback(
    (message: string, type: ToastType = 'info') => {
      const id = ++toastId
      setToasts((prev) => [...prev, { id, message, type }])

      setTimeout(() => removeToast(id), 4000)
    },
    [removeToast]
  )

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.5rem',
        }}
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
