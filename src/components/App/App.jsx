import styles from './App.module.css'
import { useSelector } from 'react-redux'

import Form from '@/components/Form'
import Game from '@/components/Game'
import Score from '@/components/Score'
import useClassName from '@/hooks/useClassName'

const ComponentRendered = { initial: <Form />, game: <Game />, score: <Score /> }

function App() {
  const { mode, currentCard } = useSelector(
    ({ app: { mode }, game: { currentCard } }) => ({
      mode,
      currentCard
    })
  )
  const className = useClassName(styles, [
    'base',
    currentCard.category && currentCard.category.replace(/\s/g, '').toLowerCase()
  ])

  return <div className={className}>{ComponentRendered[mode]}</div>
}

export default App
