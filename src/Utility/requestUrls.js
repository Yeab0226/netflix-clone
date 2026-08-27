// T-04: Define TMDB request endpoints here.
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`
};

export default requests;
