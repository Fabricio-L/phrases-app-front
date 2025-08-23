import { configureStore } from '@reduxjs/toolkit'
import phrasesReducer from './slices/phrases/phraseSlice'

export const store = configureStore({
  reducer: {
    phrases: phrasesReducer,
  },
})

// Tipado de RootState
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
