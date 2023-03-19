import { useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const GAME_LENGTH = 15

  const gameInput = useRef(null)

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(GAME_LENGTH)
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

  // function gameFocus() {
  //   gameInput.current.focus()
  // }

  function startGame(){
    setCount(0)
    gameInput.current.disabled = false
    gameInput.current.focus()
    setIsGameOn(prevState => !prevState)
  }
  
  function endGame() {
    setIsGameOn(false)
    wordCount(text)
    setTimeRemaining(GAME_LENGTH)
  }

  // function focus() {
  //   document.getElementById('textarea').focus()
  // }

  useEffect(() => {
      if(isGameOn && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining(prevTime => prevTime -1)
        }, 1000);
        } else {
          endGame()
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
        id='textarea'
        type='text'
        value={text}
        onChange={handleChange}
        disabled={isGameOn? false : true}
        ref={gameInput}
        style={isGameOn ? {background: ''} : {background: 'grey'}}
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
