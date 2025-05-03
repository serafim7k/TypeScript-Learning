
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Chat from './pages/Chat'

import { Routes, Route, NavLink } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={ <Home />} />
      </Routes>
    </>
  )
}

export default App
