import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favourites() {
  const { favorite } = useMovieContext();
  if (favorite) {
    return (
      <div className="favorite">
        <div className="movie-grid">
          {favorite.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favourites-empty">
      <h3>Your Favorites</h3>
    </div>
  );
}
export default Favourites;
