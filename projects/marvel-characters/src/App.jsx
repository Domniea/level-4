import { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import axios, { all } from 'axios'
import Card from './components/Card'
import './App.css'

function App() {

  const [allHeros, setAllHeros] = useState([])

  useEffect(() =>{
    axios.get('http://gateway.marvel.com/v1/public/characters?hash=18c80248bd55e020c97f435e5a8944bf&ts=1&apikey=3e0b50917ef8823346d96619b03394b0&limit=100&nameStartsWith=a')
      .then(all => {
        const heroList = all.data.data.results
        heroList.map(hero => {
          const heroImage = hero.thumbnail.path
          if (!heroImage.includes('image_not_available')) {
            setAllHeros(prevHero => {
              return [
                ...prevHero,
                hero
              ]
            })
          }
          else {
            console.log(hero.name)
          }
        })
      })
      .catch(error => console.log(error))
      


  }, [])

  function show(){
    console.log(allHeros)
  }

  const hero = allHeros.map(x => {
      return <Card 
        key={x.id}
        id={x.id}
        name={x.name}
        imgUrl={x.thumbnail}
        />

  })

  return (
    <div className="App">
      <h1 className="test">App test</h1>
      <button onClick={show} className="show">SHOW</button>
      {hero}
    </div>
  )
}

export default App
