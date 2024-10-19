import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../contexts/TokenContext'

const useApi = () => {
  const { removeToken } = useContext(TokenContext)

  const api = axios.create({
    baseURL: 'https://unipe-16862c35e34b.herokuapp.com',
    timeout: 10000,
  })

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        error.response &&
        error.request.responseURL !==
          'https://unipe-16862c35e34b.herokuapp.com/auth/login' &&
        error.response.status === 403
      ) {
        removeToken()
      }
      return Promise.reject(error)
    },
  )

  return api
}

export { useApi }
