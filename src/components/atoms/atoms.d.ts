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

export interface CardProps {
  phrase: string
  author?: string
}
