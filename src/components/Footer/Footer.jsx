import styles from './Footer.module.css'

function FlyingBox() {
  return (
    <div className={styles.base}>
      <a href='https://github.com/pabloc54/quiz' target='_blank' rel='noreferrer'>
        Source
      </a>
      <a href='https://the-trivia-api.com' target='_blank' rel='noreferrer'>
        The Trivia API
      </a>
    </div>
  )
}

export default FlyingBox
