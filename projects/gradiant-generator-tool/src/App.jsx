import { Fragment, useState } from 'react'
import './App.css'
import './index.css'

export default function App() {
  const [colors, setColors] = useState(
    {
        color1: '#FFFF00',
        color2: '#000000',
        color3: '#ADDADD',
        gradiant: 50,
        css2: `background: linear-gradient(50deg, #FFFF00 , #000000);`,
        cssMoz: `-moz-background: linear-gradient(50deg, #FFFF00 , #000000);`,
        cssWeb: `-webkit: linear-gradient(50deg, #FFFF00 , #000000)`
    },
  )

  const [showinput, setShowInput] = useState(false)
  
  function handleChange() {
    setColors(prevState => {
      const {name, value} = event.target
      return {
        ...prevState,
        [name]: value
      }
    })
    setColors(prevState => {
      return {
        ...prevState,
        css2: `background: linear-gradient(${colors.gradiant}deg, ${colors.color1} , ${colors.color2});`,
        cssMoz: `-moz-background: linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2});`,
        cssWeb: `-webkit: linear-gradient(${colors.gradiant}deg, ${colors.color1} , ${colors.color2})`
      }
    })
  }

  function addInput(event) {
    event.preventDefault()
    setShowInput(prevState => !prevState)
  }

  return (
    <div className="App">

        <div className="display">
            <div 
                className="display--background"
                style={
                  showinput ? 
                  {background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2}, ${colors.color3})`} :
                  {background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2})`}
                }
            >
            </div>
            <textarea
              readOnly
              value={`${colors.css2}\r\n${colors.cssMoz}\r\n${colors.cssWeb}`} />
        </div>
  
      <div className='container--inputs'>

          <form className='form'>

            <div className="input--container">
              <label htmlFor="color1">Color 1</label>
              <h3>{colors.color1}</h3>
              <input 
                type='color'
                name='color1'
                value={colors.color1}
                onChange={handleChange}
              />
            </div>

            <div className="input--container">
              <label htmlFor="color2">Color 2</label>
              <h3>{colors.color2}</h3>
              <input 
                type='color'
                name='color2'
                value={colors.color2}
                onChange={handleChange}
              />
            </div>

            {
              showinput && <Fragment>
              <div className="input--container">
                <label htmlFor="color1">Color 3</label>
                <h3>{colors.color3}</h3>
                <input 
                  type='color'
                  name='color3'
                  value={colors.color3}
                  onChange={handleChange}
                />
              </div>
              </Fragment>
            }

            <div className='input--gradiant'>
              <label htmlFor='gradiant'>Gradiant</label>
              <input 
                className='gradiant'
                type='number'
                name='gradiant'
                value={colors.gradiant}
                onChange={handleChange}
              />
            </div>
              <button 
                onClick={addInput}
                className='addButton'
              >{
              showinput ? ' - ' : ' + '}
              </button>

          </form>

      </div>
      
    </div>
  )
}

