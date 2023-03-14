import { Fragment, useState } from 'react'
// import NewInput from './components/NewInput'
// import Input from './components/input'
import './App.css'
import './index.css'

export default function App() {
  const [colors, setColors] = useState(
    {
        color1: '#00ff6e',
        color2: '#004cff',
        color3: '#ADDADD',
        gradiant: 50,
        css2: `background: linear-gradient(50deg, #00ff6e , #004cff);`,
        cssMoz2: `-moz-background: linear-gradient(50deg, #00ff6e , #004cff);`,
        cssWeb2: `-webkit: linear-gradient(50deg, #00ff6e , #004cff)`,
        css3: `background: linear-gradient(50deg, #00ff6e , #004cff, #ADDADD);`,
        cssMoz3: `-moz-background: linear-gradient(50deg, #00ff6e , #004cff, #ADDADD);`,
        cssWeb3: `-webkit: linear-gradient(50deg, #00ff6e , #004cff,#ADDADD)`
    },
  )

  const [showInput, setShowInput] = useState(false)
  
  // const [test, setTest] = useState(
  //   [
  //     {
  //       color: '#65b63F',
  //       name: 'Adam'
  //     },
  //     {
  //       color: '#666666',
  //       name: 'bob'
  //     },
  //     {
  //       color: '#123456',
  //       name: 'towren'
  //     }
  //   ]
  // )

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
        cssMoz2: `-moz-background: linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2});`,
        cssWeb2: `-webkit: linear-gradient(${colors.gradiant}deg, ${colors.color1} , ${colors.color2})`,
        css3: `background: linear-gradient(${colors.gradiant}deg, ${colors.color1} , ${colors.color2}, ${colors.color3});`,
        cssMoz3: `-moz-background: linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2}, ${colors.color3});`,
        cssWeb3: `-webkit: linear-gradient(${colors.gradiant}deg, ${colors.color1} , ${colors.color2}, ${colors.color3})`
      }
    })
  }

  function addInput(event) {
    event.preventDefault()
    setShowInput(prevState => !prevState)
  }

  // const info = test.map((test,id) => {
  //   return <NewInput
  //           key={test.color}
  //           color={test.color}
  //           name={test.name}
  //           id={id}
  //         />
  // })

  return (
    <div>
      <h1 className='header'>Gradiant Tool</h1>
      <div className="App">
        <div className="display">
          <div 
            className="display--background"
            style={
              showInput ? 
              {background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2}, ${colors.color3})`} :
              {background: `linear-gradient(${colors.gradiant}deg, ${colors.color1}, ${colors.color2})`}
            }
          >
          </div>
          <textarea
            readOnly
            value={
                !showInput ?
                `${colors.css2}\r\n${colors.cssMoz2}\r\n${colors.cssWeb2}` :
                `${colors.css3}\r\n${colors.cssMoz3}\r\n${colors.cssWeb3}` 
                
                  } 
            />
        </div>
    
        <div className='container--inputs'>

            <form className='form'>
              {/* {info} */}
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
                showInput && <Fragment>
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
              <div className='lower--container'>
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
                  name='button'
                  className='addButton'
                >{
                showInput ? '-' : '+'}
                </button>
              </div>

            </form>

        </div>
        
      </div>
    </div>
    
  )
}

