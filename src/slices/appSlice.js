import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mone: 'initial',
  categories: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.mode = 'game'
      state.categories = action.payload
    },
    stopGame: (state) => {
      state.mode = 'initial'
      state.categories = []
    }
  }
})

export const { startGame, stopGame } = appSlice.actions

export default appSlice.reducer
