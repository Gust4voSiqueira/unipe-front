import {
  Home,
  Calendar,
  RoomMap,
  LostAndFound,
  Uberona,
  Passenger,
  DriverDetails,
  Ifood,
  Driver,
  FormNewDriver,
  Pets,
} from '../ui/screens'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/room" element={<RoomMap />} />
        <Route exact path="/uberona" element={<Uberona />} />
        <Route exact path="/passenger" element={<Passenger />} />
        <Route
          path="/passenger/details/:idDriver"
          element={<DriverDetails />}
        />
        <Route exact path="/driver" element={<Driver />} />
        <Route path="/driver/registerNewDriver" element={<FormNewDriver />} />
        <Route exact path="/lostAndFound" element={<LostAndFound />} />
        <Route exact path="/pets" element={<Pets />} />
        <Route exact path="/ifood" element={<Ifood />} />
      </Routes>
    </BrowserRouter>
  )
}
