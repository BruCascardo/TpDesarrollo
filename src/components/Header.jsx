import React from "react";
import "../styles/Header.css";
import userIcon from "../images/user-icon.png";

const Header = () => {
    const userName = "Juanfra";

    return (
        <header className="header">
            <div className="logo">
                <img
                    src="https://cdn.discordapp.com/attachments/1034266873379958939/1272326528033751180/logoOdysseyTravels.png?ex=66ba91ea&is=66b9406a&hm=8fdf7fc7dac89c13a158f2f6204a16e682ec4674bbcec6b5bc46940446d7dcd0&"
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