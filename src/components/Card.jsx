import React from 'react';
import '../styles/Card.css';

const vuelos = [
    { destino: 'Miami', origen: 'Buenos Aires', precio: '908.467', imagen: 'https://images.almundo.com/205/image/upload/v1568744850/home-v3/flights/photo-1568390559.jpg' },
    { destino: 'Madrid', origen: 'Buenos Aires', precio: '1.341.920', imagen: 'https://images.almundo.com/205/image/upload/v1568324811/home-v3/flights/photo-1483450388369-9ed95738483c.jpeg' },
    { destino: 'Cancún', origen: 'Buenos Aires', precio: '782.981', imagen: 'https://images.almundo.com/205/image/upload/v1568324811/home-v3/flights/photo-1517400508447-f8dd518b86db-2.jpeg' },
    { destino: 'Río de Janeiro', origen: 'Buenos Aires', precio: '363.780', imagen: 'https://images.almundo.com/205/image/upload/v1568324811/home-v3/flights/photo-1530521954074-e64f6810b32d.jpeg' },
];

const Card = ({ destino, origen, precio, imagen }) => {
    return (
        <div className="card">
            <img src={`${imagen}`} alt={destino} className="card-img" />
            <div className="card-body">
                <h2>{destino}</h2>
                <p className='p-body'>{origen}</p>
                <div className="card-footer">
                    <p className='p-footer'>Precio por persona</p>
                    <h4>${precio}</h4>
                    <p>Incluye impuestos, tasas y cargos</p>
                </div>
            </div>
        </div>
    );
};

const CardList = () => {
    return (
        <div className="container">
            <div className="offer-container">
                <div className="offer-text">Descubrí nuestras ofertas en los mejores destinos.</div>
                <a href="#" className="view-more-button">VER MÁS</a>
            </div>
            <div className="card-list" >
                {vuelos.map((vuelo, index) => (
                    <Card key={index} {...vuelo} />
                ))}
            </div>
        </div>
    );
};

export default CardList;