export type Theme = 'light' | 'dark'

export interface Phrase {
  phrase: string
  author?: string
  anonymous: boolean
}

export interface PhraseResponse {
  id: number
  author: string
  phrase: string
  anonymous: boolean
  created_at: string
}

type Item = {
  list: PhraseResponse[]
  loading: boolean
  error: string | null
}

export interface ItemsState {
  phrases: item
}
