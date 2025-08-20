import type { ModalProps } from './molecules'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import { IconButton } from '../atoms'
import { IconX } from '@tabler/icons-react'

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    throw new Error('Modal root element not found')
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (event: { key: string }) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <IconButton ariaLabel="Close modal" onClick={onClose}>
            <IconX />
          </IconButton>
        </div>

        {children}
      </div>
    </div>,
    modalRoot
  )
}

export default Modal
