import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit'
import type { PhraseResponse } from '../types'
import { getPhrases } from '../../../data/phrases-data'

export const fetchAll = createAsyncThunk<PhraseResponse[]>(
  'phrases/fetchAll',
  async () => {
    return getPhrases()
      .then((phrases) => phrases)
      .catch((error) => {
        if (error instanceof Error) {
          return Promise.reject(error.message)
        }
        return Promise.reject('An unknown error occurred')
      })
  }
)

interface ItemsState {
  list: PhraseResponse[]
  loading: boolean
  error: string | null
}

const initialState: ItemsState = {
  list: [],
  loading: false,
  error: null,
}

const phraseSlice = createSlice({
  name: 'phrases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.loading = true
      })
      .addCase(
        fetchAll.fulfilled,
        (state, action: PayloadAction<PhraseResponse[]>) => {
          state.loading = false
          state.list = action.payload
        }
      )
      .addCase(fetchAll.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Error al cargar los datos'
      })
  },
})

export default phraseSlice.reducer
