import styles from './styles.module.css'
import { useState } from 'react'

import useClassName from '@/hooks/useClassName'
import Answer from '@/components/Answer'

function Card({ question, answers = [] }) {
  const [done, setDone] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)

  const handleDone = () => {
    setDone(false)
  }

  const className = useClassName(styles, ['base', done && 'done'])

  return (
    <div className={className} onClick={handleDone}>
      <div className={styles.question}>
        <h2>{question}</h2>
      </div>

      <div className={styles.answers}>
        {answers.map((label, i) => (
          <Answer
            key={i}
            label={label}
            checked={selectedAnswer === i}
            onClick={() => setSelectedAnswer(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Card
