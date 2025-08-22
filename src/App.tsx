import React from 'react'
import Hero from './components/hero'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
