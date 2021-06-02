import axios from 'axios'

// 引入环境变量
const {
  VITE_APP_API_URL
} = import.meta.env;

const AxiosInstance = (baseURL) => axios.create({
  baseURL
})

const API = AxiosInstance(VITE_APP_API_URL)

export default [ API ]