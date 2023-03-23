import React from 'react'
import { useContext } from 'react'
import { UglyThingContext } from './context'
import axios from 'axios'
import Form from './components/Form'
import UglyThing from './components/UglyThing'
import './App.css'

function App() {

  const {
    uglyItem,
    uglyArray,
    info,
    handleChange,
    handleSubmit
  } = useContext(UglyThingContext)

  const ugly = uglyArray.map(item => {
    return <UglyThing 
            key={item.imgUrl}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            id={item._id}
          />
    })
    
  return (
    <div className="App">
      <Form />
      {ugly}
    </div>
  )
}

export default App
