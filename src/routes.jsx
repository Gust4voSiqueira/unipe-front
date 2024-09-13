import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./ui/screens/Home";
import { Login } from "./ui/screens/Login";
import { Register } from "./ui/screens/Register";

export function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    )
}
