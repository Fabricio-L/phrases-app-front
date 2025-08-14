import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import styles from './ToggleSwitch.module.css'

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className={styles.button}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

export default ToggleSwitch
