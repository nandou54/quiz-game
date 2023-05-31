import styles from './Card.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Answer from '@/components/Answer'
import FlyingBox from '@/components/FlyingBox'
import useClassName from '@/hooks/useClassName'
import { answerCard } from '@/slices/gameSlice'
import { endGame } from '@/slices/appSlice'

function Card({ index, category, question, correctAnswer, answers = [] }) {
  const dispatch = useDispatch()

  const [done, setDone] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState()

  const { lastCard } = useSelector(({ game }) => game)
  const { questions } = useSelector(({ app }) => app)

  const className = useClassName(styles, ['base', done && 'done'])

  const handleAnswer = (label) => {
    if (done) return

    setDone(true)
    setSelectedAnswer(label)

    setTimeout(() => {
      dispatch(answerCard(label))
      setDone(false)

      if (lastCard) dispatch(endGame())
    }, 2000)
  }

  return (
    <FlyingBox className={className}>
      <div className={styles.number}>
        <span className={styles.index}>{index + 1}</span>
        <span className={styles.slash}>/</span>
        <span className={styles.total}>{questions}</span>
      </div>
      <div className={styles.category}>{category}</div>
      <div className={styles.question}>
        <h3>{question}</h3>
      </div>

      <div className={styles.answers}>
        {answers.map((label, i) => (
          <Answer
            key={i}
            label={label}
            correct={correctAnswer === label}
            selected={selectedAnswer === label}
            done={done}
            onClick={() => handleAnswer(label)}
          />
        ))}
      </div>
    </FlyingBox>
  )
}

export default Card
