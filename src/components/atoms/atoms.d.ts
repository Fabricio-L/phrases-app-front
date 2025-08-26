export interface ButtonProps {
  text: string
  onClick: () => void
  icon?: React.ReactNode
  ariaLabel?: string
}

export interface IconButtonProps {
  children: React.ReactNode
  onClick: () => void
  ariaLabel?: string
}

export interface ToastProps {
  message: string
  type: 'info' | 'success' | 'error'
}

export interface SearchProps {
  setQuery: (query: string) => void
}
