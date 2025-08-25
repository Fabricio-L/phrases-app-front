import type { Phrase, PhraseResponse } from '../utils/globals'
import supabase from '../utils/supabase-client'

const getPhrases = async (): Promise<PhraseResponse[]> => {
  const { data, error } = await supabase.from('Phrases').select()
  if (error) throw new Error(error.message)

  return data as PhraseResponse[]
}

const addPhrase = async (objet: Phrase): Promise<number> => {
  const { error, status } = await supabase.from('Phrases').insert([objet])
  if (error) throw new Error(error.message)

  return status
}

const removePhrase = async (id: number): Promise<number> => {
  const { status, error } = await supabase.from('Phrases').delete().eq('id', id)
  if (error) throw new Error(error.message)

  return status
}

const updatePhrase = async (id: number, objet: Phrase): Promise<number> => {
  const { status, error } = await supabase
    .from('Phrases')
    .update(objet)
    .eq('id', id)
  if (error) throw new Error(error.message)

  return status
}

export { getPhrases, addPhrase, removePhrase, updatePhrase }
