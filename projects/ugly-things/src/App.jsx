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

  const ugly = uglyArray.map((item, i) => {
    return <UglyThing 
            key={i}
            imgUrl={item.imgUrl}
            title={item.title}
            description={item.description}
            id={item._id}
          />
    })

  
  return (
    <div className="App">
      <Form />
      <div className='ugly--container'>
        {ugly}
      </div>
    </div>
  )
}

export default App
