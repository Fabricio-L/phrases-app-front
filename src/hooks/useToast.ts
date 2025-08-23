import { useContext } from 'react'
import type { ToastContextType } from '../context/ToastContext'
import { ToastContext } from '../context/ToastContext'

export const useToast = (): ToastContextType => {
  return useContext(ToastContext)
}
