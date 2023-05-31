import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'initial',
  selectedCategories: [],
  questions: 5,
  startTime: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.selectedCategories.push(action.payload)
    },
    removeCategory: (state, action) => {
      const index = state.selectedCategories.indexOf(action.payload)
      state.selectedCategories.splice(index, 1)
    },
    setQuestions: (state, action) => {
      state.questions = Number(action.payload)
    },
    startGame: (state) => {
      state.mode = 'game'
      state.startTime = performance.now()
    },
    endGame: (state) => {
      state.mode = 'score'
    },
    restart: (state) => {
      state.mode = 'initial'
    }
  }
})

export const { addCategory, removeCategory, setQuestions, startGame, endGame, restart } =
  appSlice.actions

export default appSlice.reducer
