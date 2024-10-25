import axios from 'axios'
import { useContext } from 'react'
import { TokenContext } from '../contexts/TokenContext'

const api = axios.create({
  baseURL: 'https://unipe-16862c35e34b.herokuapp.com',
  timeout: 10000,
})

api.interceptors.response.use(
  response => response,
  async error => {
    const { removeToken } = useContext(TokenContext)

    if (error.response.status === 403) {
        removeToken()
    }
  }
)

export { api }
