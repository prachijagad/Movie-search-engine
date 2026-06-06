import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';
import { getPopularMovies, searchMovies } from "../services/api";

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      }catch(err) {
        console.log(err)
        setError("Failed to load movies...");
      }
      finally{
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

   if (loading) {
    return <h2>Loading...</h2>;
   }

   if(error){
    return <h2>{error}</h2>;
   }

  return (
   
    <div className="home">
      <form className="search-form" onSubmit={handleChange}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn" >
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default Home;
