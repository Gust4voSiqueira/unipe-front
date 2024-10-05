import axios from 'axios'

const api = axios.create({
  baseURL: 'https://unipe-16862c35e34b.herokuapp.com',
  timeout: 10000,
})

export { api }
