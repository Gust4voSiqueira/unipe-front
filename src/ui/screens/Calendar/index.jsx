import './styles.css'
import { Header } from '../../components'

import AcademicCalendar from '../../../assets/academicCalendar.jpeg'
import ExamCalendar from '../../../assets/examCalendar.png'

export function Calendar() {
  return (
    <>
      <Header title="Calendário Acadêmico" />
      <div className="calendars-container">
        <img
          src={AcademicCalendar}
          alt="Calendário Acadêmico"
          className="academic-calendar"
        />
        <img
          src={ExamCalendar}
          alt="Calendário de Provas"
          className="academic-calendar"
        />
      </div>
    </>
  )
}
