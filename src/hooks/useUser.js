import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'
import { formatPhoneNumber } from '../utils/formatPhone'

export const useUser = () => {
  const { addToken, token } = useContext(TokenContext)

  async function registerUser(userRegister) {
    try {
      const response = await api.post('/auth/register', {...userRegister, phone: formatPhoneNumber(userRegister.phone)}, {
        headers: {
          'Content-type': 'application/json',
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function login(user) {
    try {
      const response = await api.post('/auth/login', {
        email: user.email,
        password: user.password,
      })

      addToken(response.data?.token)

      return response
    } catch (error) {
      return error
    }
  }

  async function myUser() {
    try {
      const { data } = await api.post('/user/myUser', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return data
    } catch (error) {
      return error
    }
  }

  return {
    registerUser,
    login,
    myUser
  }
}
