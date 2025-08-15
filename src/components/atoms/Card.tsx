import type { CardProps } from './atoms'
import styles from './Card.module.css'

const Card = (props: CardProps) => {
  const { phrase, author } = props

  return (
    <div className={styles.card}>
      <p className={styles.phrase}>"{phrase}"</p>
      <h2 className={styles.author}>{author || 'Anónimo'}</h2>
    </div>
  )
}

export default Card