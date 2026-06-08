import {useState, useContext, useEffect, createContext, Children} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({Children}) {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const storedFav = localStorage.getItem("favorite");

        if(storedFav) setFavorite(JSON.parse(storedFav))
    }, []);

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }, [favorite])

    const addToFavorite = (movie) => {
        setFavorite(prev => [...prev, movie]);
    }

    const removeFromFavorite = (movieId) => {
        setFavorite(prev => prev.filter(movie => movieId !== movie.imdbID))
    }

    const isFavorite = (movieId) =>  {
        return favorite.some(movie => movie.imdbID === movieId)
    }
    return <MovieContext.Provider>
        {Children}
    </MovieContext.Provider>
}