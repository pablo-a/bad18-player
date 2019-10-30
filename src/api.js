import axios from "axios";

const api = axios.create({
  baseURL: `http://51.83.99.221:42042`
});

export default api;
