import './index.css'
import React from 'react'
import { Provider } from 'react-redux'

import App from '@/components/App'
import { store } from '@/store'

import { createRoot } from 'react-dom/client'
const container = document.querySelector('main')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
