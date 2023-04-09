import React from "react";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'

export default function App() {
    return (
        
    <Router>

        <nav>
            <Link to='/' style={{padding: 10}}>
                Home
            </Link>
            <Link to='/about' style={{padding: 10}}>
                About
            </Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
    )
}