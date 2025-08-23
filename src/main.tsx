import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import './index.css'
import App from './App.tsx'
import { ToastProvider } from './context/ToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ToastProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </ThemeProvider>
)
