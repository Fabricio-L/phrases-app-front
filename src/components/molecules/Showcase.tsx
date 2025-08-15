import Card from '../atoms/Card'
import styles from './Showcase.module.css'

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <Card phrase="Test de aplicación" />
    </section>
  )
}

export default Showcase
