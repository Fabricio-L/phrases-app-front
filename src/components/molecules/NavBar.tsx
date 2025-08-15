import { IconBrandGithub } from '@tabler/icons-react'
import { IconButton, ToggleSwitch } from '../atoms'
import styles from './NavBar.module.css'

const NavBar = () => {
  const handleHyperlink = () => {
    window.open('https://github.com/Fabricio-L/phrases-app-front', '_blank')
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>Frases Wep App</h1>
        <IconButton ariaLabel="Hyperlink to Github" onClick={handleHyperlink}>
          <IconBrandGithub />
        </IconButton>
        <ToggleSwitch />
      </nav>
    </header>
  )
}

export default NavBar
