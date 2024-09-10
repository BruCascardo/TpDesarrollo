import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-section">
                    <h3>Atención al cliente</h3>
                    <p>0810.220.1309</p>
                    <p>Lunes a viernes de 10 a 21 h</p>
                    <p>Sábados de 10 a 16 h</p>
                </div>
                <div className="sales-section">
                    <h3>Ventas</h3>
                    <p>0810.220.1031</p>
                    <p>WhatsApp: +54 911 5571.0504</p>
                    <p>Lunes a domingos y feriados de 9 a 23 h</p>
                </div>
                <div className="links-section">
                    <h3>Odyssey Travels</h3>
                    <ul>
                        <li><a href="#">¿Quiénes somos?</a></li>
                        <li><a href="#">Formas de pago</a></li>
                        <li><a href="#">Sucursales</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </div>
                <div className="legal-section">
                    <h3>LEGALES</h3>
                    <ul>
                        <li><a href="https://www.argentina.gob.ar/normativa/nacional/ley-24240-638" target="_blank">Ley 24.240</a></li>
                        <li><a href="#">Condiciones generales</a></li>
                        <li><a href="#">Política de seguridad</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Términos y condiciones del uso del sitio</a></li>
                    </ul>
                </div>
            </div>
            <div className="consumer-protection">
                <p>Defensa de las y los consumidores. Para reclamos ingrese <a href="#">aquí</a></p>
                <p>Dirección General de Defensa y Protección al Consumidor. Para consultas y/o denuncias ingrese <a href="#">aquí</a></p>
            </div>
            <div className="footer-bottom">
                <p>© 1993-2024. OdysseyTravels.com S.R.L. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;