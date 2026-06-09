import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { MovieProvider } from "./contexts/MovieContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
    <ThemeProvider>
    <div className={theme}>
    <MovieProvider>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favourites/>}/>
        </Routes>
      </main>
      </MovieProvider>
     
      </div>
       </ThemeProvider>
    </>
  );
}

export default App;
