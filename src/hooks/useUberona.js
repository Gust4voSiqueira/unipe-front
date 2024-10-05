import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'

export const useUberona = () => {
    const { token } = useContext(TokenContext)

    async function getDrivers() {
    try {
      const response = await api.get(
        '/motorist/listMotorists/Luziânia', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
      )

      return response
    } catch (error) {
      throw error
    }
  }

  async function getDriverDetails(driverId) {
    try {
      const { data } = await api.get(
          `/motorist/getMotorist/${driverId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
      )

      return data
    } catch (error) {
      throw error
    }
  }

  return {
    getDrivers,
    getDriverDetails
  }
}