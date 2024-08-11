import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Empresa de viajes. Todos los derechos reservados.</p>
            <nav>
                <ul>
                    <li><a href="#">Privacidad</a></li>
                    <li><a href="#">Términos</a></li>
                    <li><a href="#">Soporte</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;