import { useState,useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import HeroList from './components/HeroList'
import Card from './components/Card'
import axios from 'axios'

import './App.css'
import MovieList from './components/MovieList'

function App() {

  return (
    <div className="App">

      <nav>
        <Link to={'/'} style={{padding: '2vh 2vw'}}>Home</Link>
        <Link to={'/movieList'} style={{padding: '2vh 2vw'}}>Movies</Link>
        <Link to={'/heroList'} style={{padding: '2vh 2vw'}}>Hero's</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/heroList' element={<HeroList/>} />
        <Route path='/heroList/:heroId' element={<Card/>} />
        <Route path='/movieList' element={<MovieList/>} />

      </Routes>
    </div>
  )
}

export default App
