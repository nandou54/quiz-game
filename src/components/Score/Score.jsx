import { useDispatch, useSelector } from 'react-redux'
import styles from './Score.module.css'

import useClassName from '@/hooks/useClassName'
import { restart } from '@/slices/appSlice'

function Score() {
  const dispatch = useDispatch()
  const {
    app: { questions },
    game: { results }
  } = useSelector((state) => state)

  const correctAnswers = results.filter(({ correct }) => correct).length
  const score = correctAnswers * 5

  const handleRestartGame = () => {
    dispatch(restart())
  }

  return (
    <div className={styles.base}>
      <h1>{score}</h1>
      <h3>
        Correct answers: {correctAnswers}/{questions}
      </h3>
      <div className={styles.results}>
        {results.map(({ correct, card }, i) => (
          <Result key={i} correct={correct} {...card} />
        ))}
      </div>
      <div className={styles.restart}>
        <button onClick={handleRestartGame}>restart</button>
      </div>
    </div>
  )
}

function Result({ question, correctAnswer, correct }) {
  const className = useClassName(styles, ['result', correct && 'correct'])

  return (
    <div className={className}>
      <div>
        <b>Question:</b> {question}
      </div>
      <div>
        <b>Answer:</b> {correctAnswer}
      </div>
    </div>
  )
}

export default Score
