import styles from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux'

import useClassName from '@/hooks/useClassName'
import { addCategory, removeCategory, setQuestions, startGame } from '@/slices/appSlice'
import categories from '@/constants/categories'
import FlyingBox from '@/components/FlyingBox'
import Button from '@/components/Button'

function Form() {
  const { selectedCategories, questions } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const handleAddCategory = (ev) => {
    dispatch(addCategory(ev.target.value))
    ev.target.value = ''
  }

  const handleRemoveCategory = (ev) => {
    dispatch(removeCategory(ev.target.value))
  }

  const handleQuestions = (ev) => {
    dispatch(setQuestions(ev.target.value))
  }

  const handleStartGame = (ev) => {
    ev.preventDefault()
    if (!selectedCategories.length) return
    dispatch(startGame())
  }

  const playClassName = useClassName(styles, [
    'play',
    (selectedCategories.length === 0 || questions < 5 || questions > 20) && 'forbidden'
  ])

  return (
    <form onSubmit={handleStartGame}>
      <FlyingBox className={styles.base}>
        <div>
          <h2>Welcome to Quiz Game</h2>
          <p>Please select one or more categories</p>
          <div className={styles.categories}>
            <label htmlFor='categories'>Categories</label>
            <select name='categories' defaultValue='' onClick={handleAddCategory}>
              {categories
                .filter((category) => !selectedCategories.includes(category))
                .map((category) => (
                  <option key={category}>{category}</option>
                ))}
            </select>
            <label htmlFor='number'>Questions</label>
            <input
              type='number'
              name='number'
              value={questions}
              onChange={handleQuestions}
              min={5}
              max={20}
            />
          </div>
        </div>
        <div>
          <h3>Categories selected</h3>
          {selectedCategories.length > 0 ? (
            <div className={styles.selectedCategories}>
              {selectedCategories.map((category) => (
                <Button key={category} value={category} onClick={handleRemoveCategory}>
                  {category} ✕
                </Button>
              ))}
            </div>
          ) : (
            <small>None selected</small>
          )}
        </div>
        <div className={playClassName}>
          <Button primary>Play</Button>
        </div>
      </FlyingBox>
    </form>
  )
}

export default Form
