import type { ButtonProps } from './atoms'
import styles from './Button.module.css'

const Button = (props: ButtonProps) => {
  const { text, onClick, icon, ariaLabel } = props

  return (
    <button className={styles.button} aria-label={ariaLabel} onClick={onClick}>
      {icon && icon}
      {text}
    </button>
  )
}

export default Button