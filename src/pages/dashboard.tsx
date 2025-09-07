import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard: React.FC = () => {
    const auth = useAuth()
    if (!auth) {
      return <div>Loading...</div>
    }
    const { user, logout } = auth
    return (
      <div>
        <p>this is a dashboard</p>
        <p>{user?.email}</p>
        <button onClick={logout}>logout</button>
      </div>
    )
}

export default Dashboard
