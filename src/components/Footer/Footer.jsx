import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.base}>
      <a href='https://github.com/nanndo54/quiz-game' target='_blank' rel='noreferrer'>
        Source
      </a>
      <a href='https://the-trivia-api.com' target='_blank' rel='noreferrer'>
        The Trivia API
      </a>
    </div>
  )
}

export default Footer
