import axios from "axios";

// T-04: Configure the shared TMDB Axios instance.
const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { movieInstance };
