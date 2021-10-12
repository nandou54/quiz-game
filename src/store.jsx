import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '@/slices/gameSlice'

const combineReducers = {
  reducer: {
    game: gameReducer
  }
}

export const store = configureStore(combineReducers)
