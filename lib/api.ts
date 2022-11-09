import axios from 'axios'
import ServerUrl from './ServerUrl'

const api = axios.create({
  baseURL: ServerUrl
})

export default api
