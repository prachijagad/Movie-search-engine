import {Link} from "react-router-dom";
import '../css/Navbar.css';
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

function Navbar() {
    // console.log("navbar rendered");
    const {theme, setTheme} = useTheme();
    console.log(theme);

    return (
    <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favourites</Link>
        </div>
        <h4>{theme} Mode</h4>
        <button onClick={() => setTheme(theme === "light" ? "black" : "light")}>Toggle Theme</button>
    </div> 
    );
}

export default Navbar;