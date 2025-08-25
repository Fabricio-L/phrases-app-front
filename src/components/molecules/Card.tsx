import { IconEdit, IconTrash } from '@tabler/icons-react'
import type { CardProps } from './molecules'
import styles from './Card.module.css'
import { removePhrase } from '../../data/phrases-data'
import { useToast } from '../../hooks/useToast'
import { useAppDispatch } from '../../redux/hook'
import { fetchAll } from '../../redux/slices/phrases/phraseSlice'
import useModalManager from '../../hooks/useModalManager'
import PhrasesForm from '../forms/PhrasesForm'
import { Modal } from './'

const Card = (props: CardProps) => {
  const dispatch = useAppDispatch()

  const { addToast } = useToast()
  const { isOpen, open, close } = useModalManager()
  const { phrase } = props

  const handleDelete = () => {
    removePhrase(phrase.id)
      .then((res) => {
        if (res === 204) addToast('Frase eliminada correctamente', 'success')
        dispatch(fetchAll())
      })
      .catch((error) => {
        if (error instanceof Error) {
          return addToast(error.message, 'error')
        }
      })
  }

  return (
    <>
      <div className={styles.card}>
        <span className={styles.icons}>
          <IconEdit
            className={styles.edit}
            aria-label="Edit phrase"
            onClick={() => open('modalEdit')}
          />
          <IconTrash
            className={styles.trash}
            aria-label="Delete phrase"
            onClick={handleDelete}
          />
        </span>
        <p className={styles.phrase}>"{phrase.phrase}"</p>
        <h2 className={styles.author}>{phrase.author || 'Anónimo'}</h2>
      </div>
      <Modal
        title="Editar Frase"
        isOpen={isOpen('modalEdit')}
        onClose={() => close('modalEdit')}
      >
        <PhrasesForm
          onClose={() => close('modalEdit')}
          edit={true}
          object={phrase}
        />
      </Modal>
    </>
  )
}

export default Card
