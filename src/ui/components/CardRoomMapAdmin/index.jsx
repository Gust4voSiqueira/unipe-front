import { Trash } from '@phosphor-icons/react'
import './styles.css'

const days = {
  segunda: 'Segunda-Feira',
  terca: 'Terça-Feira',
  quarta: 'Quarta-Feira',
  quinta: 'Quinta-Feira',
  sexta: 'Sexta-Feira',
}

export function CardRoomMapAdmin({ classroomId, discipline, day, room, isAdmin, deleteClassroom }) {
  return (
    <div className="card-room-map-admin-container">
      <div className="card-room-map-container-text">
        <p className="room-text">{discipline}</p>
        <p className="room-day">{days[day]}</p>
      </div>
      <div className="button-and-room">
        <span>{room}</span>
        {isAdmin && (
          <button className="button-icon" onClick={() => deleteClassroom(classroomId)}>
            <Trash size={24} color="#fff" />
          </button>
        )}
      </div>
    </div>
  )
}
