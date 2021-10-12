import styles from './styles.module.css'

// import Card from '@/components/Card'
// import useGame from '@/hooks/useGame'

function App() {
  // const { currentCard } = useGame()

  const handleStartGame = () => {}

  return (
    <div className={styles.base}>
      <form onSubmit={handleStartGame}>
        <input></input>
      </form>
      {/* <Card {...currentCard} /> */}
    </div>
  )
}

export default App
