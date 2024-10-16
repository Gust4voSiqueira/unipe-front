import { useContext } from 'react'

import { TokenContext } from '../contexts/TokenContext'
import { useApi } from './useApi'

export const useLostAndFound = () => {
  const api = useApi()
  const { token } = useContext(TokenContext)

  async function getItems() {
    try {
      const { data } = await api.get('/lostAndFound/getItems', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    } catch (error) {
      throw error
    }
  }

  async function registerNewItem(item) {
    try {
      await api.post('/lostAndFound/createItem', item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }

  async function deleteItem(itemId) {
    try {
      await api.delete(`/lostAndFound/removeItem/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      throw error
    }
  }

  return {
    getItems,
    registerNewItem,
    deleteItem,
  }
}
