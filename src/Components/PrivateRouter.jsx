import React from 'react'
import { userAuth } from '..supabase/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ children }) => {
  const { session } = userAuth()
  return (
    <>{session ? <>{children}</> :<Navigate to="/signup" />} </>
  )
}

export default PrivateRouter
