import React from 'react'
import Hero from './components/hero'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
