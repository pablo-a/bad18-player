import axios from "axios";

const api = axios.create({
  baseURL: `https://api.bad18.pabril.dev`
});

export default api;
