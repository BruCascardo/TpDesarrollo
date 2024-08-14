import React from "react";
import "../styles/Header.css";
import userIcon from "../images/user-icon.png";
import logo from "../images/logoFinal2.png";

const Header = () => {
    const userName = "Juanfra";

    return (
        <header className="header">
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo"
                />
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="#alojamiento">Alojamiento</a>
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
