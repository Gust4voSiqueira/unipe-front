import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenContext'
import { useApi } from './useApi'

export const useIfood = () => {
  const api = useApi()
  const { token } = useContext(TokenContext)

  async function listFoods() {
    try {
      const { data } = await api.get('/food', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    } catch (error) {
      throw new error()
    }
  }

  async function insertFood(food) {
    try {
      const { data } = await api.post('/food/insertFood', food, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return data
    } catch (error) {
      throw new error()
    }
  }

  async function updateStatus(idFood, newStatus) {
    try {
      const { data } = await api.put(
        `/food/updateStatus/${idFood}/${newStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      return data
    } catch (error) {
      throw new error()
    }
  }

  async function getIsProductInCurrentUser() {
    try {
      const { data } = await api.get('/food/myFood', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    } catch (error) {
      throw new error()
    }
  }

  async function deleteProduct(productId) {
    try {
      await api.delete(`/food/delete/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

    } catch (error) {
      throw new error()
    }
  }
  

  return {
    listFoods,
    updateStatus,
    getIsProductInCurrentUser,
    insertFood,
    deleteProduct
  }
}
