import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";

function App() {
  const movieNumber = 1;

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
