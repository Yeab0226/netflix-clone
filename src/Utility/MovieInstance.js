import axios from "axios";

const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { movieInstance };

// https://api.themoviedb.org/3/discover/movie?api_key=e7a3707cbbedcd6e13610018c50a7534&with_genres=99
