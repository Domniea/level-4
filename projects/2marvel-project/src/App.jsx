import { useState,useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import HeroCard from './components/HeroCard'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'
import Alphabet from './components/Alphabet'
import './App.css'
import LetterGroup from './components/LetterGroup'
import NotFound from './components/NotFound'


function App() {
  const [heroList,setHeroList] = useState()

  const justMarvel =[]

  useEffect(() => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
    .then(results => {
        const data = results.data
        
        data.map(hero => {
            if(hero.biography.publisher === 'Marvel Comics') {
            justMarvel.push(hero)
            }
        })
    })
    
    .catch(error => console.log(error))
    setHeroList(justMarvel)
}, [])
  return (
    <div className="App">

      <nav className='app--nav'>
        <Link to={'/'} >Home</Link>
        <Link to={'/movieList'} >Movies</Link>
        <Link to={'/heros'} >Heros/Villians</Link>
      </nav>
      
      <Routes>
        <Route index element={<Home state={heroList} />} />
        <Route path='/movieList' element={<MovieList/>} />
        <Route path='/movieList/:movieId/*' element={<MovieCard/>} />
        <Route path='/heros' element={<Alphabet />} >
          <Route path=':letter' element={<LetterGroup />} />
          <Route path=':letter/:heroId' element={<HeroCard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
