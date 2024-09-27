import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mighty-taiga-59818-71b5d9144727.herokuapp.com',
  timeout: 10000, 
})

export { api }