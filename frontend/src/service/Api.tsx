import axios from "axios";

// Interage com o backend
const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export default api;
