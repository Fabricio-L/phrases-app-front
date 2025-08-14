import type { ButtonProps } from './atoms'
import styles from './Button.module.css'

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button}>
      {props.text}
    </button>
  )
}

export default Button