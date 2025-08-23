import type { ToastProps } from './atoms'
import styles from './Toast.module.css'

const STYLE = {
  info: styles.info,
  success: styles.success,
  error: styles.error,
}

const Toast = (props: ToastProps) => {
  const { message, type } = props

  return <div className={STYLE[type]}>{message}</div>
}

export default Toast
