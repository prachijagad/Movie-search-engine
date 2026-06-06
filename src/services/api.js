const API_KEY = "3b834b1e";
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=avengers`
  );

  const data = await res.json();
  return data.Search || [];
};

export const searchMovies = async(query) => {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.Search || [];
}