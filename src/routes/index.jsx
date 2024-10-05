import '../../global.css'
import { useContext } from 'react'
import { TokenContext } from '../contexts/TokenContext'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { token } = useContext(TokenContext)

  return (
    <div className="global-container">
      {token ? <AppRoutes /> : <AuthRoutes />}
    </div>
  )
}
