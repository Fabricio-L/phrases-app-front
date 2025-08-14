import { useState } from 'react'
import styles from './App.module.css'
import { ToggleSwitch } from './components/atoms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <ToggleSwitch />
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </main>
  )
}

export default App
