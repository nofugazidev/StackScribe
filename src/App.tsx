import React from 'react'
import Hero from './components/hero'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import ProtectedRoute from './components/routes/protecredRoute'
import DashboardLayout from './components/dashboardLayout'
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
