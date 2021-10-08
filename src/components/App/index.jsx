import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '@/components/Card'
import useClassName from '@/hooks/useClassName'

const backgrounds = ['clouds', 'moon']

let card = {
  question: '¿Cuántos planetas hay en el universo?',
  answers: [1, 5, 6, 7]
}

function App() {
  const [background, setBackground] = useState(backgrounds[0])
  const [transition, setTransition] = useState(false)
  const [cards, setCards] = useState([])
  const [currentCard, setCurrentCard] = useState({})

  useEffect(() => {
    axios
      .get('https://api.trivia.willfry.co.uk/questions?limit=5')
      .then(({ data }) => {
        const newCards = data.map(({ question, correctAnswer, incorrectAnswers }) => {
          if (incorrectAnswers.length > 3) incorrectAnswers.splice(3)
          return {
            question,
            answers: [correctAnswer, ...incorrectAnswers]
          }
        })

        setCards(newCards)
        setCurrentCard(newCards[0])
      })
      .catch(console.log)
  }, [])

  // const handleTransition = () => {
  //   setTransition(true)
  //   setTimeout(() => {
  //     handleChangeBackground()
  //     setTimeout(() => {
  //       setTransition(false)
  //     }, 500)
  //   }, 500)
  // }

  const handleChangeBackground = () => {
    const index = backgrounds.indexOf(background)
    const newBackground = backgrounds[index < backgrounds.length - 1 ? index + 1 : 0]
    setBackground(newBackground)
  }

  const className = useClassName(styles, ['base', background, transition && 'transition'])

  return (
    <div className={className}>
      <div className={styles.blackscreen} />
      <Card {...currentCard} />
    </div>
  )
}

export default App
