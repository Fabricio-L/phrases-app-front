export interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface ShowcaseProps {
  data: Phrase[]
}
