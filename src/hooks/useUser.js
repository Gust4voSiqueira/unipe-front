import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'

export const useUser = () => {
  const { addToken, token } = useContext(TokenContext)

  async function registerUser(userRegister) {
    try {
      const response = await api.post('/auth/register', userRegister, {
        headers: {
          'Content-type': 'application/json',
        },
      })

      return response.data
    } catch (error) {
      throw error
    }
  }

  async function login(user) {
    try {
      const response = await api.post(
        '/auth/login',
        {
          email: user.email,
          password: user.password,
        }
      )

      addToken(response.data?.token)

      return response
    } catch (error) {
      throw error
    }
  }

  return {
    registerUser,
    login,
  }
}