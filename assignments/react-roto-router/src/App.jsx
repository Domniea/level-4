import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'
import './App.css'

export default function App() {

  

  return (
    <div className='App'>
   {/* <Router> */}

    <nav>
        <Link to='/' style={{padding: 10}}>Home</Link>
        <Link to='/about'style={{padding: 10}}>About</Link>
        <Link to='/services' style={{padding: 10}}>Services</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/services/:serviceId' element={<ServiceDetails/>} />
    </Routes>
   {/* </Router> */}
   </div>
  )
}


// <div className='App'>
// <Home />
// <About />
// <Services />
// </div>