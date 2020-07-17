import React from 'react';
import './HeaderNavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_curseduca.png';

const HeaderNavBar = () => {
    return (
        <header className="navbar">
            <img className="brand" src={logo} alt="CursEduca"/>
            <div className="linksDiv">
                <Link to="/" className="link"> Entrar </Link>
                <Link to="/posts" className="link"> Posts </Link>
            </div>
        </header>
    );
}

export default HeaderNavBar;