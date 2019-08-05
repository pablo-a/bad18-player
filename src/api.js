import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: `http://vps708520.net`
});

export default api;
