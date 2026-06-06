import React from "react";
import "../css/MovieCard.css";
import { useState } from "react";

const MovieCard = ({ movie }) => {
    const [like, setLike] = useState(false);


  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={() => setLike(!like)}>{like ? "❤️" : "🤍"}</button>
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
