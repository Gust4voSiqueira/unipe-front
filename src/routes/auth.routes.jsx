import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Register } from '../ui/screens'

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
