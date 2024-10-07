import { useContext } from 'react'
import { api } from '../lib/axios'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../contexts/TokenContext'

export const useLostAndFound = () => {
  const navigate = useNavigate()
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
      console.log(itemId)
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
