import { Home } from '../ui/screens/Home'
import { Calendar } from "../ui/screens/Calendar";
import { RoomMap } from "../ui/screens/RoomMap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Uberona } from "../ui/screens/Uberona";
import { Passenger } from "../ui/screens/Uberona/Passenger";
import { DriverDetails } from '../ui/screens/Uberona/DriverDetails';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route exact path="/room" element={<RoomMap />} />
            <Route exact path="/uberona" element={<Uberona />} />
            <Route exact path="/passenger" element={<Passenger />} />
            <Route path="passenger/details/:idDriver" element={<DriverDetails />} />
        </Routes>
    </BrowserRouter>
  )
}
