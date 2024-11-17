import { CardRoomMapAdmin, Header } from '../../../components'
import './styles.css'

export function ClassroomMapStudent({ classrooms }) {
    return (
        <>
        <Header title="Mapa de sala" />
        <div className="room-map-container">

        {/* {isLoading ? <Loading /> : null} */}
        {classrooms
        .map(classroom => 
          <CardRoomMapAdmin
            discipline={classroom.discipline}
            day={classroom.day}
            room={classroom.classroom}
          />)}
        </div>
        </>
    )
}