import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <img src="https://via.placeholder.com/50" alt="Almundo Logo"></img>
                </div>
                <div className="contact-info">
                    <span>VENTAS:</span>
                    <a href="#">0810-222-1080</a>
                    <a href="#">+54-341-156-205208</a>
                    <span>De lunes a domingo y feriados de 9 a 23 h</span>
                    <a href="#" className="login">Ingresar</a>
                </div>
            </div>
            <nav className="nav-links">
                <a href="#">Alojamientos</a>
                <a href="#">Vuelos</a>
                <a href="#">Paquetes</a>
                <a href="#">Actividades</a>
                <a href="#">Asistencias</a>
                <a href="#">Autos</a>
                <a href="#">Disney</a>
                <a href="#">Universal</a>
                <a href="#">Circuitos</a>
            </nav>
        </header>
    );
}

export default Header;