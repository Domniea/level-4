import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { UglyThingContextProvider } from './context'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <UglyThingContextProvider>
      <App />
    </UglyThingContextProvider>
  </Fragment>

)
