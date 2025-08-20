import { useState, useCallback } from 'react'

export function useModalManager() {
  const [modals, setModals] = useState<{ [key: string | number]: boolean }>({})

  const open = useCallback((id: string | number) => {
    setModals((prev) => ({ ...prev, [id]: true }))
  }, [])

  const close = useCallback((id: string | number) => {
    setModals((prev) => ({ ...prev, [id]: false }))
  }, [])

  const toggle = useCallback((id: string | number) => {
    setModals((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const isOpen = useCallback(
    (id: string | number) => !!modals[id], // si no existe, devuelve false
    [modals]
  )

  return { isOpen, open, close, toggle }
}

export default useModalManager
