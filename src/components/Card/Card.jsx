import styles from './Card.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Answer from '@/components/Answer'
import useClassName from '@/hooks/useClassName'
import { answerCard } from '@/slices/gameSlice'
import { endGame } from '@/slices/appSlice'

function Card({ question, answers = [], correctAnswer, category = 'test' }) {
  const [done, setDone] = useState(false)

  const { lastCard } = useSelector(({ game }) => game)

  const className = useClassName(styles, ['base', done && 'done'])

  const dispatch = useDispatch()

  const handleAnswer = (label) => {
    setDone(true)
    setTimeout(() => {
      dispatch(answerCard(label))
      setDone(false)

      if (lastCard) dispatch(endGame())
    }, 1000)
  }

  return (
    <div className={className}>
      <small>{category}</small>
      <div className={styles.question}>
        <h3>{question}</h3>
      </div>

      <div className={styles.answers}>
        {answers.map((label, i) => (
          <Answer
            key={i}
            label={label}
            correct={correctAnswer === label}
            done={done}
            onClick={() => handleAnswer(label)}
          />
        ))}
      </div>
    </div>
  )
}

export default Card
