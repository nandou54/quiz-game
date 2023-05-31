const categories = [
  'food_and_drink',
  'geography',
  'general_knowledge',
  'history',
  'arts_and_literature',
  'science',
  'society_and_culture',
  'music',
  'film_and_tv',
  'sport_and_leisure'
]

const categoriesLabels = categories.map((category) => category.replaceAll('_', ' '))

export { categories, categoriesLabels }
