import { useApi } from './useApi'
import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenContext'

export const usePets = () => {
  const api = useApi()
  const { token } = useContext(TokenContext)

  async function listPets() {
    try {
      const { data } = await api.get('/pet', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return data
    } catch (error) {
      throw new error()
    }
  }

  async function deletePet(petId) {
    try {
      await api.delete(`pet/delete/${petId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw new error()
    }
  }

  async function createPet(pet) {
    try {
      await api.post('pet/insert', pet,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw new error()
    }
  }

  return {
    listPets,
    deletePet,
    createPet
  }
}
