import { useState } from 'react'
import './App.css'
import './index.css'

export default function App() {
  const [colors, setColors] = useState(
    {
        color1: '#c6d0ad',
        color2: '#000066',
        gradiant: 50
    },
  )

  const [count, setCount] = useState(2)

  function handleChange() {
    setColors(prevState => {
      const {name, value} = event.target
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  function addInput(event) {
    event.preventDefault()
    setColors(prevState => {
      return [
        ...prevState,
        {
          color: '#DDDDDD'
        }
      ]
    })
  }

  return (
    <div className="App">
      <div className='container--display'>
        <div className="display">
            <div 
                className="display--background"
                style={{background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2})`}}
            >
            </div>
            <div className="display--CSS">CSS goes here</div>
        </div>
      </div>
      <div className='container--inputs'>
        <div className='inputs'>
          <form className='form'>
            <div className="input--container">
              <label htmlFor="color1">color1</label>
              <h3>{colors.color1}</h3>
              <input 
                type='color'
                name='color1'
                value={colors.color1}
                onChange={handleChange}
              />
            </div>

            <div className="input--container">
              <label htmlFor="color2">color2</label>
              <h3>{colors.color2}</h3>
              <input 
                type='color'
                name='color2'
                value={colors.color2}
                onChange={handleChange}
              />
            </div>
            <div className='input--container'>
              <label htmlFor='gradiant'>Gradiant</label>
              <input 
                className='gradiant'
                type='number'
                name='gradiant'
                value={colors.gradiant}
                onChange={handleChange}
              />
            </div>
              {/* <button onClick={addInput}>+</button> */}
          </form>
        </div>
      </div>
      
    </div>
  )
}

