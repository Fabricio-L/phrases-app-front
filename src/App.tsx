import { NavBar } from './components/molecules'
import styles from './App.module.css'
import Showcase from './components/molecules/Showcase'
import { Button } from './components/atoms'
import { IconPlus } from '@tabler/icons-react'

function App() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <Button
            text="Agregar frase"
            ariaLabel="Add a new phrase"
            onClick={() => {}}
            icon={<IconPlus />}
          />
        </div>
        <Showcase />
      </main>
    </>
  )
}

export default App
