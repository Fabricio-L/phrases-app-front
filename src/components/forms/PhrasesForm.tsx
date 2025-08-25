import styles from './PhrasesForm.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import type { Phrase, PhraseResponse } from '../../utils/globals'
import { addPhrase, updatePhrase } from '../../data/phrases-data'
import { useToast } from '../../hooks/useToast'
import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/hook'
import { fetchAll } from '../../redux/slices/phrases/phraseSlice'

const schema = yup
  .object({
    phrase: yup.string().required('Debe ingresar una frase'),
    anonymous: yup.boolean().default(false),
    author: yup.string().when('anonymous', {
      is: false,
      then: (schema) => schema.required('Debe ingresar un autor'),
      otherwise: (schema) => schema,
    }),
  })
  .required()

interface PhrasesFormProps {
  onClose: () => void
  edit: boolean
  object?: PhraseResponse
}

const PhrasesForm = ({ onClose, edit, object }: PhrasesFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const dispatch = useAppDispatch()
  const { addToast } = useToast()

  const anonymous = watch('anonymous')
  if (anonymous) setValue('author', '')

  useEffect(() => {
    if (edit && object) {
      setValue('phrase', object?.phrase)
      setValue('anonymous', object?.anonymous)
      setValue('author', object?.author)
    }
  }, [edit, object, setValue])

  const onSubmit = (data: Phrase) => {
    if (edit && object)
      return updatePhrase(object.id, data)
        .then((res) => {
          if (res === 204) addToast('La frase se ha actualizado', 'success')
          dispatch(fetchAll())
          onClose()
        })
        .catch((error) => {
          if (error instanceof Error) {
            return addToast(error.message, 'error')
          }
        })

    addPhrase(data)
      .then((res) => {
        if (res === 201) addToast('Frase agregada correctamente', 'success')
        dispatch(fetchAll())
        onClose()
      })
      .catch((error) => {
        if (error instanceof Error) {
          return addToast(error.message, 'error')
        }
      })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="phrase">Frase</label>
      <textarea className={styles.textArea} {...register('phrase')} />
      <p className={styles.messageError}>{errors.phrase?.message}</p>

      <label htmlFor="author">Autor</label>
      <input
        className={styles.input}
        {...register('author')}
        disabled={anonymous}
      />
      <p className={styles.messageError}>{errors.author?.message}</p>

      <div className={styles.checkboxContainer}>
        <input
          className={styles.optionInput + ' ' + styles.checkbox}
          type="checkbox"
          {...register('anonymous')}
        />
        <label htmlFor="anonymous">Anónimo</label>
      </div>

      <input
        className={styles.inputButton}
        type="submit"
        value={edit ? 'Editar Frase' : 'Agregar Frase'}
      />
    </form>
  )
}

export default PhrasesForm
