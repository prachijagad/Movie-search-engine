import {Link} from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {
    console.log("navbar rendered");

    return (
    <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favourites</Link>
        </div>
    </div> 
    );
}

export default Navbar;