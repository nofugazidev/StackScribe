import React from 'react'
import Hero from './components/hero'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './components/routes/protecredRoute'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
