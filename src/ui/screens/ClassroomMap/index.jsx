import './styles.css'
import { useClassRoom } from '../../../hooks/useClassRoom'
import { RoomMapAdmin } from './Admin'
import { ClassroomMapStudent } from './Student'
import { useEffect, useState } from 'react'
import { Loading } from '../Loading'

export function ClassroomMap() {
  const { listClassroom, createClassroom, deleteClassroom } = useClassRoom()
  const [isLoading, setIsLoading] = useState(true)
  const [classrooms, setClassrooms] = useState([])

  async function getClassrooms() {
    try {
      setIsLoading(true)
      const data = await listClassroom()
      setClassrooms(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function handleCreateClassroom(classroom) {
    try {
      setIsLoading(true)
      await createClassroom(classroom)
      getClassrooms()
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function handleDeleteClassroom(classroomId) {
    try {
      setIsLoading(true)
      await deleteClassroom(classroomId)
      getClassrooms()
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getClassrooms()
  }, [])

  if(isLoading) return <Loading />

  return classrooms?.isTeacher ? <RoomMapAdmin classrooms={classrooms.classroomList} isTeacher={classrooms?.isTeacher} createClassroom={handleCreateClassroom} deleteClassroom={handleDeleteClassroom} /> : <ClassroomMapStudent classrooms={classrooms.classroomList} />
}
