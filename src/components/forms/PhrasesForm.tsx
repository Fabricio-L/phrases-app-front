import styles from './PhrasesForm.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    phrase: yup.string().required('Debe ingresar una frase'),
    anonymous: yup.boolean(),
    author: yup.string().when('anonymous', {
      is: false,
      then: (schema) => schema.required('Debe ingresar un autor'),
      otherwise: (schema) => schema,
    }),
  })
  .required()

const PhrasesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const anonymous = watch('anonymous')
  if (anonymous) setValue('author', '')

  const onSubmit = (data: unknown) => console.log(data)

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
        value="Agregar Frase"
      />
    </form>
  )
}

export default PhrasesForm
