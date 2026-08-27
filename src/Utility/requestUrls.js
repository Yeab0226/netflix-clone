// T-04: Define TMDB request endpoints here.
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // Add category endpoints here.
};

export default requests;
