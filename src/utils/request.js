import axios from 'axios'
const service = axios.create({
  baseURL: "https://social-system-server.herokuapp.com",
  timeout:5000
});

export default service;