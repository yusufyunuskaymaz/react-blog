import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContextProvider'

const PrivateRouter = () => {
    const {currentUser} = useContext(UserContext)
  return currentUser.email ? <Outlet /> : <Navigate to="login" />
  
}

export default PrivateRouter