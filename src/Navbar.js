import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-sm text-dark bg-light">
            <ul className="navbar-nav">
                <li className="nav-item active"><Link to="/search" className="nav-link">Search</Link></li>
                <li className="nav-item"><Link to="/director" className="nav-link">Directors</Link></li>
                <li className="nav-item"><Link to="/favour" className="nav-link">My Favourites</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;