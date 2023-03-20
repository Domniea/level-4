import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {ThemeContextProvider } from './themeContext'
import './App.css'

function App() {

  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
      </ThemeContextProvider>
  )
}

export default App
