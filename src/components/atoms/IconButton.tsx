import type { IconButtonProps } from './atoms'
import styles from './IconButton.module.css'

const IconButton = (props: IconButtonProps) => {
  const { children, onClick, ariaLabel } = props

  return (
    <button className={styles.button} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton