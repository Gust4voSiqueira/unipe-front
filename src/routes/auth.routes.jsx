import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../ui/screens/Login";
import { Register } from "../ui/screens/Register";

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