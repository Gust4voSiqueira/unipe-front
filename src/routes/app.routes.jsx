import { Home } from "../ui/screens/Home";
import { Calendar } from "../ui/screens/Calendar";
import { RoomMap } from "../ui/screens/RoomMap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/academicCalendar" element={<Calendar />} />
            <Route exact path="/roomMap" element={<RoomMap />} />
        </Routes>
    </BrowserRouter>
  )
}