import styles from './App.module.css'
import { useSelector } from 'react-redux'

import Form from '@/components/Form'
import Game from '@/components/Game'
import Score from '@/components/Score'

function App() {
  const { mode } = useSelector(({ app }) => app)

  return (
    <div className={styles.base}>
      {{ initial: <Form />, game: <Game />, score: <Score /> }[mode]}
    </div>
  )
}

export default App
