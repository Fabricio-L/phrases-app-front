import { useState } from 'react'
import { Search } from '../atoms'
import Card from './Card'
import type { ShowcaseProps } from './molecules'
import styles from './Showcase.module.css'

const Showcase = (props: ShowcaseProps) => {
  const { data } = props
  const [query, setQuery] = useState('')

  const filtered = data.filter((item) =>
    item.phrase.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className={styles.showcase}>
      <Search setQuery={setQuery} />
      {data.length > 0 ? (
        filtered.map((phrase) => <Card key={phrase.id} phrase={phrase} />)
      ) : (
        <div>
          <h2 key={0} className={styles.empty}>
            Aún no hay ninguna frase cargada
          </h2>
        </div>
      )}
    </section>
  )
}

export default Showcase
