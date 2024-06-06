import axios from "axios";

const api = axios.create({
  baseURL: 'https://githubanotaai.github.io/frontend-interview-mock-data'
})

export default api
