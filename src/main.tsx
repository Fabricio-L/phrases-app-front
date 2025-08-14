import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
