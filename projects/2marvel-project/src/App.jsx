import { useState,useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'

import HeroCard from './components/HeroCard'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'
import Alphabet from './components/Alphabet'
import './App.css'
import LetterGroup from './components/LetterGroup'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="App">

      <nav className='app--nav'>
        <Link to={'/'} >Home</Link>
        <Link to={'/movieList'} >Movies</Link>
        <Link to={'/heros'} >Heros/Villians</Link>
        {/* <Link to='/heros/homeTest'>HomeTest</Link>
        <Link to='/heros/buttTest' >ButtTest</Link> */}
        {/* <Link to={'/heros'} style={{padding: '2vh 2vw'}}>Heros</Link> */}
      </nav>
      
      <Routes>
        <Route index element={<Home/>} />
        {/* <Route path='/heroList' element={<HeroList/>} /> */}
        {/* <Route path='/heroList/:heroId' element={<HeroCard/>} /> */}
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
