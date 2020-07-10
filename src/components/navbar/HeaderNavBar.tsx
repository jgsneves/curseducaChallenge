import React from 'react';
import './HeaderNavBar.css';

const HeaderNavBar = () => {
    return (
        <header className="navbar">
            <h1 className="brand">CursEduca</h1>
            <div className="linksDiv">
                <p className="link"> Entrar </p>
                <p className="link"> Posts </p>
            </div>
        </header>
    );
}

export default HeaderNavBar;