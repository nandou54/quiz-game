import styles from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux'

import useClassName from '@/hooks/useClassName'
import { addCategory, removeCategory, setQuestions, startGame } from '@/slices/appSlice'
import { categoriesLabels } from '@/constants/categories'
import FlyingBox from '@/components/FlyingBox'
import Button from '@/components/Button'

import icon from '/icon.svg'

const questionNumbers = [5, 10, 15, 20]

function Form() {
  const { selectedCategories, questions } = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const categoriesButtons = categoriesLabels.map((name) => ({
    name,
    selected: selectedCategories.includes(name)
  }))

  const questionButtons = questionNumbers.map((number) => ({
    number,
    selected: number === questions
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
        <div className={styles.header}>
          <object data={icon} type='image/svg+xml' aria-label='Webpage icon' />
          <h1>Quiz Game</h1>
        </div>
        <h2>Number of questions</h2>
        <div className={styles.questions}>
          {questionButtons.map(({ number, selected }) => (
            <Button
              key={number}
              className={selected ? styles.selected : ''}
              type='button'
              value={number}
              onClick={handleQuestions}
            >
              {number}
            </Button>
          ))}
          <input
            type='number'
            name='number'
            title='Custom umber of questions'
            value={questions}
            onChange={handleQuestions}
            min={5}
            max={40}
          />
        </div>
        <h2>Categories</h2>
        <div className={styles.categories}>
          {categoriesButtons.map(({ name, selected }) => (
            <Button
              key={name}
              className={selected ? styles.selected : ''}
              type='button'
              value={name}
              onClick={selected ? handleRemoveCategory : handleAddCategory}
            >
              {name} {selected ? '⨯' : '+'}
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
