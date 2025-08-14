import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { IconMoon, IconSun } from '@tabler/icons-react'
import styles from './ToggleSwitch.module.css'
import { THEME } from '../../utils/constants'

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className={styles.button}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT} mode`}
    >
      {theme === THEME.LIGHT ? <IconMoon /> : <IconSun />}
    </button>
  )
}

export default ToggleSwitch
