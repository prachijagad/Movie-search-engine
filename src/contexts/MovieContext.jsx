import {useState, useContext, useEffect, createContext, Children} from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({children}) {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const storedFav = localStorage.getItem("favorite");

        if(storedFav) setFavorite(JSON.parse(storedFav))
    }, []);

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite));
    }, [favorite]);

    const addToFavorite = (movie) => {
        setFavorite(prev => [...prev, movie]);
    }

    const removeFromFavorite = (movieId) => {
        setFavorite(prev => prev.filter(movie => movieId !== movie.imdbID))
    }

    const isFavorite = (movieId) =>  {
        return favorite.some(movie => movie.imdbID === movieId)
    }

    const values = {
        favorite,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }
    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>
}