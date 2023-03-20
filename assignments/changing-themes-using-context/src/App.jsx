import { useState } from 'react'
import { useContext } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import { ThemeContext } from './themeContext'
import './App.css'

function App() {

  const {colors} = useContext(ThemeContext)

  return (
    <div className={`App ${colors}-theme`}>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App
