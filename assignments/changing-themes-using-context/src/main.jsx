import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './themeContext'
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <ThemeContextProvider>
     <App />
    </ThemeContextProvider>
  </Fragment>
)
