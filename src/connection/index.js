import axios from "axios";

const heroku = "https://pokedexapibr.herokuapp.com/";
const local = "http://localhost:8080/";

const api = axios.create({
  baseURL: heroku,
});

export default api;
