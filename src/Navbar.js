import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/Learn'>Learn</Link>
                <Link to='/Contact'>Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;