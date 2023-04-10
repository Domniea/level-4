import { useState,useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import HeroList from './components/HeroList'
import HeroCard from './components/HeroCard'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'
import './App.css'

function App() {

  return (
    <div className="App">

      <nav>
        <Link to={'/'} style={{padding: '2vh 2vw'}}>Home</Link>
        <Link to={'/movieList'} style={{padding: '2vh 2vw'}}>Movies</Link>
        <Link to={'/heroList'} style={{padding: '2vh 2vw'}}>Heros & Villians</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/heroList' element={<HeroList/>} />
        <Route path='/heroList/:heroId' element={<HeroCard/>} />
        <Route path='/movieList' element={<MovieList/>} />
        <Route path='/movieList/:movieId' element={<MovieCard/>} />

      </Routes>
    </div>
  )
}

export default App
