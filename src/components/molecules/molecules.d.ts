export interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface ShowcaseProps {
  data: Phrase[]
}

type Phrase = {
  id: number
  author: string
  phrase: string
  anonymous: boolean
  created_at: string
}

export interface CardProps {
  phrase: Phrase
}
