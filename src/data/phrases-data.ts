import type { Phrase, PhraseResponse } from '../utils/globals'
import supabase from '../utils/supabase-client'

const getPhrases = async (): Promise<PhraseResponse[]> => {
  const { data, error } = await supabase.from('Phrases').select()
  if (error) throw new Error(error.message)

  return data as PhraseResponse[]
}

const addPhrase = async (objet: Phrase): Promise<null> => {
  const { data, error } = await supabase.from('Phrases').insert([objet])
  if (error) throw new Error(error.message)

  console.log({
    data: data,
    error: error,
  })

  return data
}

const removePhrase = async (id: number): Promise<number> => {
  const { error } = await supabase.from('Phrases').delete().eq('id', id)
  if (error) throw new Error(error.message)

  return id
}

const updatePhrase = async (id: number, phrase: string): Promise<number> => {
  const { error } = await supabase
    .from('Phrases')
    .update({ phrase: phrase })
    .eq('id', id)
  if (error) throw new Error(error.message)

  return id
}

export { getPhrases, addPhrase, removePhrase, updatePhrase }
