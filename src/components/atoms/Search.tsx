import type { SearchProps } from './atoms'
import styles from './Search.module.css'

const Search = ({ setQuery }: SearchProps) => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder="Buscar"
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

export default Search
