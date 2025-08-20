import { NavBar, Modal } from './components/molecules'
import styles from './App.module.css'
import Showcase from './components/molecules/Showcase'
import { Button } from './components/atoms'
import { IconPlus } from '@tabler/icons-react'
import useModalManager from './hooks/useModalManager'
import PhrasesForm from './components/forms/PhrasesForm'

function App() {
  const { isOpen, open, close } = useModalManager()

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
        <Showcase />
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
