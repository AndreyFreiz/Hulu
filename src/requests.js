const API_KEY = '1f12e9f4f2245e7bfc6db6b0cf5dcee7'

export default {
   fetchTrending: `https://api.themoviedb.org/3/discover/trending/all/well?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `https://api.themoviedb.org/3/discover/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchMystery:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
   fetchSkiFi:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
   fetchWestern:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
   fetchAnimation:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
   fetchTV:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

