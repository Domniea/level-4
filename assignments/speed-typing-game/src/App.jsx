import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [count, setCount] = useState(0)
  const [isGameOn,setIsGameOn] = useState(false)
  
  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }

  function wordCount(string) {
    const wordsArray = string.trim().split(' ')
    const total = wordsArray.filter(words => words !== '').length
    setCount(total)
    return total
  }

  function startGame(){
    setCount(0)

    setIsGameOn(prevState => !prevState)
  }

  useEffect(() => {
      if(isGameOn && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining(prevTime => prevTime -1)
        }, 1000);
        } else {
          setIsGameOn(false)
          wordCount(text)
          setTimeRemaining(15)
        };
  }, [timeRemaining, isGameOn])

  useEffect(() => {
    if(!isGameOn) {
      setText('')
    }
  },[isGameOn])

  return (
    <div className="App">
      <h1>How Fast Do You Type?</h1>
      <textarea
        name='textArea'
        type='text'
        value={text}
        onChange={handleChange}
        disabled={isGameOn? false : true}
      >
      </textarea>
      <h4>Time remaining: {timeRemaining}sec</h4>
      {isGameOn && <button onClick={startGame}>End</button>}
      {!isGameOn && <button onClick={startGame}>Start</button>}
      <h1>
        Word count: 
        {
         count
        }
      </h1>
    </div>
  )
}

export default App
