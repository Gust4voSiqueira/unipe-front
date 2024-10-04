import { TokenContextProvider } from './contexts/TokenContext'
import { Routes } from './routes/index'

export function App() {
  return (
    <TokenContextProvider>
      <Routes />
    </TokenContextProvider>
  )
}
