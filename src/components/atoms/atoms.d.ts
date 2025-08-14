export interface ButtonProps {
  text: string
}

export interface IconButtonProps {
  children: React.ReactNode
  onClick: () => void
  ariaLabel?: string
}