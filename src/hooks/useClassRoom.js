import { useApi } from './useApi'
import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenContext'

export const useClassRoom = () => {
  const api = useApi()
  const { token } = useContext(TokenContext)

  async function listClassroom() {
    try {
      const { data } = await api.get('/classroom', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return data
    } catch (error) {
      throw new error()
    }
  }

  async function deleteClassroom(classroomId) {
    try {
      await api.delete(`classroom/delete/${classroomId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw new error()
    }
  }

  async function createClassroom(classroom) {
    try {
      await api.post('classroom', classroom, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw new error()
    }
  }

  return {
    listClassroom,
    deleteClassroom,
    createClassroom,
  }
}
