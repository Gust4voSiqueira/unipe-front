import { useState } from 'react'
import {
  CardRegisterItem,
  CardRoomMapAdmin,
  Header
} from '../../../components'
import './styles.css'
import { ModalClassroom } from '../../../components/ModalClassroom'
import { useClassRoom } from '../../../../hooks/useClassRoom'

export function RoomMapAdmin({ classrooms, isTeacher, createClassroom, deleteClassroom }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  console.log(classrooms)

  return (
    <>
      <Header title="Mapa de sala" />
      <ModalClassroom isOpen={isOpenModal} handleCloseModal={() => setIsOpenModal(false)} handleInsertClassroom={createClassroom} />
      <div className="room-map-container">
        <CardRegisterItem
          text="cadastrar uma sala"
          handleModal={() => setIsOpenModal(true)}
        />

        {classrooms
        .map(classroom => 
          <CardRoomMapAdmin
            key={classroom.id}
            classroomId={classroom.id}
            discipline={classroom.discipline}
            day={classroom.day}
            room={classroom.classroom}
            isAdmin={isTeacher}
            deleteClassroom={deleteClassroom}
          />)}
        
      </div>
    </>
  )
}
