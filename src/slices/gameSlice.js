import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cards: [],
  currentCard: {},
  correctAnswer: '',
  results: []
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload
      state.currentCard = state.cards[0]
      state.correctAnswer = state.currentCard.correctAnswer
      state.results = []
    },
    answerCard: (state, action) => {
      console.log(action.payload, state.correctAnswer)
      const result = { correct: action.payload === state.correctAnswer }
      state.results.push(result)

      const index = state.currentCard.index
      const newCard = state.cards[index < state.cards.length ? index + 1 : 0]
      state.currentCard = newCard
      state.correctAnswer = state.currentCard.correctAnswer
    }
  }
})

export const { setCards, answerCard } = gameSlice.actions

export default gameSlice.reducer
