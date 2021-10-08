import styles from './styles.module.css'
import useClassName from '@/hooks/useClassName'

function Answer({ checked, label, onClick }) {
  const className = useClassName(styles, ['base', checked && 'checked'])

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  )
}

export default Answer
