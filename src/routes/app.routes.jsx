import { Home } from '../ui/screens/Home'
import { Calendar } from '../ui/screens/Calendar'
import { RoomMap } from '../ui/screens/RoomMap'
import { LostAndFound } from '../ui/screens/LostAndFound'
import { Uberona } from '../ui/screens/Uberona'
import { Passenger } from '../ui/screens/Uberona/Passenger'
import { DriverDetails } from '../ui/screens/Uberona/DriverDetails'
import { Driver } from '../ui/screens/Uberona/Driver'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormNewDriver } from '../ui/screens/Uberona/Driver/FormNewDriver.jsx'
import { Pets } from '../ui/screens/Pets'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/room" element={<RoomMap />} />
        <Route exact path="/uberona" element={<Uberona />} />
        <Route exact path="/passenger" element={<Passenger />} />
        <Route path="/passenger/details/:idDriver" element={<DriverDetails />} />
        <Route exact path="/driver" element={<Driver />} />
        <Route path="/driver/registerNewDriver" element={<FormNewDriver />} />
        <Route exact path="/lostAndFound" element={<LostAndFound />} />
        <Route exact path="/pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>
  )
}
