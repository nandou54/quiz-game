import styles from './styles.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useClassName from '@/hooks/useClassName'
import Answer from '@/components/Answer'
import { answerCard } from '@/slices/gameSlice'

function Card({ question, answers = [] }) {
  const [done, setDone] = useState(false)

  const { correctAnswer } = useSelector(({ game }) => game)

  const className = useClassName(styles, ['base', done && 'done'])

  const dispatch = useDispatch()

  const handleAnswer = (label) => {
    setDone(true)
    setTimeout(() => {
      dispatch(answerCard(label))
      setDone(false)
    }, 1000)
  }

  return (
    <div className={className}>
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
