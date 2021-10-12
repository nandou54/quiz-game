import styles from './styles.module.css'

import useClassName from '@/hooks/useClassName'

function Answer({ label, correct, done, onClick }) {
  const className = useClassName(styles, [
    'base',
    done && (correct ? 'correct' : 'wrong')
  ])

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  )
}

export default Answer
