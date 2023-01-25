const auth_url = "https://movie-irom.onrender.com/api";
const api_key = "api_key=d04dffe6dc89289658330e04071f264a";
const base_url = "https://api.themoviedb.org/3";

export const signup_url = `${auth_url}/auth/sign_up`;

export const login_url = `${auth_url}/auth/sign_in`;

export const carousel_url = `${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`;
export const movies_url = `${base_url}/movie/popular?api_key=${api_key}&language=en-US`;
export const tvSeries_url = `${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`;
export const upcoming_url = `${base_url}/discover/movie?sort_by=popularity.desc&${api_key}`;
export const all_movies = (page: any) =>
  `${base_url}movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`;
// export const UpcomingMoviesRoute = (page: any) =>
//   `${base_url}/movie/upcoming?page=${page}&api_key=${api_key}`;
// export const AllSeriesRoute = (page: any) =>
//   `${base_url}/discover/tv?page=${page}&api_key=${api_key}`;
