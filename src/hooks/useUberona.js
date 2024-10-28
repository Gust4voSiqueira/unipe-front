import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenContext'
import { useApi } from './useApi'

export const useUberona = () => {
  const api = useApi()
  const { token } = useContext(TokenContext)

  async function getDrivers(city) {
    try {
      const response = await api.get(`/motorist/listMotorists/${city}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response
    } catch (error) {
      throw error
    }
  }

  async function getDriverDetails(driverId) {
    try {
      const { data } = await api.get(`/motorist/getMotorist/${driverId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    } catch (error) {
      throw error
    }
  }

  async function createNewDriver(driver) {
    try {
      await api.post('/motorist/createMotorist', driver, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }

  async function isExistsCarRegistered() {
    try {
      const { data } = await api.get('/motorist/isExistsCarRegistered', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    } catch (error) {
      throw error
    }
  }

  async function deleteDriver(motoristId) {
    try {
      await api.delete(`/motorist/delete/${motoristId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }

  async function editDriver(motoristId, motoristUpdated) {
    try {
      await api.put(`/motorist/edit/${motoristId}`, motoristUpdated,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }

  return {
    getDrivers,
    getDriverDetails,
    createNewDriver,
    isExistsCarRegistered,
    deleteDriver,
    editDriver
  }
}
