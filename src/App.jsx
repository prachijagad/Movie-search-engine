import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {
  const movieNumber = 1;
  useEffect(() => {
      const id = setInterval(() => {
        console.log("Tick");
      },1000)
    });

  return (
    
    <>
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favourites/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
