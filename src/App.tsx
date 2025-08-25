import { NavBar, Modal, Showcase } from './components/molecules'
import { Button } from './components/atoms'
import { IconPlus } from '@tabler/icons-react'

import useModalManager from './hooks/useModalManager'
import PhrasesForm from './components/forms/PhrasesForm'

import styles from './App.module.css'
import { useEffect } from 'react'
import { useToast } from './hooks/useToast'

import type { ItemsState } from './utils/globals'
import { fetchAll } from './redux/slices/phrases/phraseSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'
import Spinner from './components/atoms/Spinner'

function App() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state: ItemsState) => state.phrases)

  const { isOpen, open, close } = useModalManager()
  const { addToast } = useToast()

  useEffect(() => {
    dispatch(fetchAll())

    if (items.error) addToast(items.error, 'error')
  }, [dispatch, items.error, addToast])

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <Button
            text="Agregar frase"
            ariaLabel="Add a new phrase"
            onClick={() => open('modal')}
            icon={<IconPlus />}
          />
        </div>
        {items.loading ? <Spinner /> : <Showcase data={items.list} />}
      </main>
      <Modal
        title="Nueva Frase"
        isOpen={isOpen('modal')}
        onClose={() => close('modal')}
      >
        <PhrasesForm />
      </Modal>
    </>
  )
}

export default App
