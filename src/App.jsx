import { DriverContextProvider } from './contexts/DriverContext'
import { TokenContextProvider } from './contexts/TokenContext'
import { Routes } from './routes/index'

export function App() {
  return (
    <TokenContextProvider>
      <DriverContextProvider>
        <Routes />
      </DriverContextProvider>
    </TokenContextProvider>
  )
}
