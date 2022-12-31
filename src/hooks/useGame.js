import { shuffleArray } from '@/helper'
import { setCards } from '@/slices/gameSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function useGame() {
  const [ready, setReady] = useState(false)

  const {
    app: { selectedCategories, questions },
    game: { currentCard }
  } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    const API_URL = `https://the-trivia-api.com/api/questions?categories=${selectedCategories
      .join(',')
      .replaceAll(' ', '_')
      .toLowerCase()}&limit=${questions}`

    axios
      .get(API_URL)
      .then(({ data }) => {
        const newCards = data.map(
          ({ question, correctAnswer, incorrectAnswers, category }, index) => {
            if (incorrectAnswers.length > 3) incorrectAnswers.splice(3)

            const answers = [correctAnswer, ...incorrectAnswers]
            shuffleArray(answers)

            return {
              index,
              question,
              answers,
              correctAnswer,
              category
            }
          }
        )

        dispatch(setCards(newCards))
        setReady(true)
      })
      .catch(console.log)
  }, [])

  return { ready, currentCard }
}

export default useGame
