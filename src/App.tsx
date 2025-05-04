
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Chat from './pages/Chat'
import Register from './pages/Register'

import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  
  return (
    <>
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/chat">Chat</NavLink> | <NavLink to="/register">Register</NavLink>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={ <Home />} />
      </Routes>
    </>
  )
}

export default App
