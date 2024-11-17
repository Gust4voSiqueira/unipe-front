import { useApi } from './useApi'
import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenContext'

export const useMentoring = () => {
  const api = useApi()
  const { token } = useContext(TokenContext)

  async function listMentorings() {
    try {
      const { data } = await api.get('/mentoring', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return data
    } catch (error) {
      throw new error()
    }
  }

  async function deleteMentoring(mentoringId) {
    try {
      await api.delete(`mentoring/delete/${mentoringId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw new error()
    }
  }

  async function createMentoring(mentoring) {
    try {
      await api.post('mentoring', mentoring, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw new error()
    }
  }

  return {
    createMentoring,
    listMentorings,
    deleteMentoring,
  }
}
