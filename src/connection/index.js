import axios from "axios";

const heroku = "Ainda não tem";
const local = "http://localhost:8080/";

const api = axios.create({
  baseURL: local,
});

export default api;
