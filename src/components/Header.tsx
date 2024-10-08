import React from "react";
import "../styles/Header.css";
import userIcon from "../images/user-icon.png";
import logo from "../images/logoFinal2.png";
import { Link } from "react-router-dom";

const Header = () => {
    const userName = "Panchito Alaniz";

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" ><img src={logo} alt="Logo"/></Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/card" >Alojamiento</Link>
                    </li>
                    <li>
                        <a href="#paquetes">Paquetes</a>
                    </li>
                    <li>
                        <a href="#excurciones">Excurciones</a>
                    </li>
                    <li>
                        <a href="#autos">Autos</a>
                    </li>
                    <li>
                        <a href="#nosotros">Nosotros</a>
                    </li>
                </ul>
            </nav>
            <div className="user">
                <img src={userIcon} alt="User Icon" className="user-icon" />
                <span>Hola! {userName}</span>
            </div>
        </header>
    );
};

export default Header;
