import React from 'react';
import '../styles/PreFooter.css';

const PreFooter = () => {
    return (
        <footer className="footer1">
            <div className="suscripcion">
                <p>No te pierdas ninguna promoción</p>
                <div className="suscripcion-input">
                    <input type="email" placeholder="Ingresá tu email" />
                    <button className='button-suscribe'>Suscribirme</button>
                </div>
            </div>
            <div className="enlaces">
                <div className="columna">
                    <h4>Vuelos Baratos</h4>
                    <ul>
                        <li><a href="#">Vuelos a Miami</a></li>
                        <li><a href="#">Vuelos a Rio de Janeiro</a></li>
                        <li><a href="#">Vuelos a Madrid</a></li>
                        <li><a href="#">Vuelos a Cancún</a></li>
                    </ul>
                </div>
                <div className="columna">
                    <h4>Paquetes Turísticos</h4>
                    <ul>
                        <li><a href="#">Paquetes a Brasil</a></li>
                        <li><a href="#">Paquetes al Caribe</a></li>
                        <li><a href="#">Paquetes a Europa</a></li>
                        <li><a href="#">Paquetes en Argentina</a></li>
                    </ul>
                </div>
                <div className="columna">
                    <h4>Hoteles en Oferta</h4>
                    <ul>
                        <li><a href="#">Hoteles en Rio de Janeiro</a></li>
                        <li><a href="#">Hoteles en Punta Cana</a></li>
                        <li><a href="#">Hoteles en Orlando</a></li>
                        <li><a href="#">Hoteles en Argentina</a></li>
                    </ul>
                </div>
                <div className="columna">
                    <h4>Viajes en Oferta</h4>
                    <ul>
                        <li><a href="#">Cyber Monday 2024</a></li>
                        <li><a href="#">Black Friday 2024</a></li>
                        <li><a href="#">Travel Sale 2024</a></li>
                        <li><a href="#">Hot Sale 2025</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="viajes-argentina">
                    <h4>Viajes por Argentina</h4>
                    <ul>
                        <li><a href="#">Ofertas en Argentina</a></li>
                        <li><a href="#">Vuelos por Argentina</a></li>
                        <li><a href="#">Hoteles por Argentina</a></li>
                    </ul>
                </div>
                <div>
                    <p className="disclaimer">
                        Podés cancelar tus compras realizadas de forma online o telefónica dentro de un plazo máximo de 10 días desde la fecha que realizaste la compra.
                    </p>
                </div>
                <button className="boton-arrepentimiento">Botón de arrepentimiento</button>
            </div>
        </footer>
    );
};

export default PreFooter;