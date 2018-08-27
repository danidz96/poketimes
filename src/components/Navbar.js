import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><NavLink  to="/" activeClassName="blue darken-4" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="blue darken-4">About</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="blue darken-4">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;