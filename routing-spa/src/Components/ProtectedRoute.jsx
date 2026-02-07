import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuth = false // change to true for testing
  return isAuth ? children : <Navigate to="/login" />
}
