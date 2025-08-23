import type { ShowcaseProps } from './molecules'
import Card from '../atoms/Card'
import styles from './Showcase.module.css'

const Showcase = (props: ShowcaseProps) => {
  const { data } = props

  return (
    <section className={styles.showcase}>
      {data.length > 0 ? (
        data.map((phrase) => (
          <Card key={phrase.id} phrase={phrase.phrase} author={phrase.author} />
        ))
      ) : (
        <div>
          <h2 key={0}>Aún no hay ninguna frase cargada</h2>
        </div>
      )}
    </section>
  )
}

export default Showcase
