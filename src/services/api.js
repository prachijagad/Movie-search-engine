const API_KEY = "3b834b1e";
const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3b834b1e";

export const getPopularMovies = async() => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = res.json();
    return data.results;
}