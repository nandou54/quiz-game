import { shuffleArray } from '@/helper'
import { setCards } from '@/slices/gameSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useGame() {
  const { currentCard } = useSelector(({ game }) => game)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('https://api.trivia.willfry.co.uk/questions?limit=5')
      .then(({ data }) => {
        const newCards = data.map(
          ({ question, correctAnswer, incorrectAnswers }, index) => {
            if (incorrectAnswers.length > 3) incorrectAnswers.splice(3)

            const answers = [correctAnswer, ...incorrectAnswers]
            shuffleArray(answers)

            return {
              index,
              question,
              answers,
              correctAnswer
            }
          }
        )

        dispatch(setCards(newCards))
      })
      .catch(console.log)
  }, [])

  return { currentCard }
}

export default useGame
