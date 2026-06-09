import React from "react";
import "../css/MovieCard.css";
import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
    // const [like, setLike] = useState(false);
    const {isFavorite, addToFavorite, removeFromFavorite} = useMovieContext();
    const favorite = isFavorite(movie.imdbID);

    function onFavoriteClick(e){
      e.preventDefault();
      if(favorite) removeFromFavorite(movie.imdbID);
      else addToFavorite(movie);
    }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>{favorite ? "❤️" : "🤍"}</button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
