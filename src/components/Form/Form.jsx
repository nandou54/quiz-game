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

  const categoriesButtons = categories.map((name) => ({
    name,
    selected: selectedCategories.includes(name)
  }))

  const handleAddCategory = (ev) => {
    dispatch(addCategory(ev.target.value))
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
          <p>Please fill the next options</p>
        </div>
        <div className={styles.questions}>
          <h3>Questions</h3>
          <input
            type='number'
            name='number'
            value={questions}
            onChange={handleQuestions}
            min={5}
            max={20}
          />
        </div>
        <h3>Categories</h3>
        <div className={styles.categories}>
          {categoriesButtons.map(({ name, selected }) => (
            <Button
              key={name}
              className={selected ? styles.selected : ''}
              type='button'
              value={name}
              onClick={selected ? handleRemoveCategory : handleAddCategory}
            >
              {name} {selected ? '✕' : ' +'}
            </Button>
          ))}
        </div>
        <div className={playClassName}>
          <Button primary>Start Game</Button>
        </div>
      </FlyingBox>
    </form>
  )
}

export default Form
