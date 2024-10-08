import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Body.css';
import video from '../images/esteEs.mp4';

const BuscadorVuelos = () => {
    const [price, setPrice] = useState(5000);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Manejador del cambio de precio
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    // Manejador del submit del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({
            startDate,
            endDate,
            price,
        });
    };

    return (
        <div className="contenedor-buscador">
            <video autoPlay muted loop id="bgVideo">
                <source src={video} type="video/mp4" />
            </video>
            <h2>NUESTROS PAQUETES</h2>
            <h1>Busca tu viaje ideal</h1>
            <form onSubmit={handleSubmit} className="formulario-buscador">
                <div className="search-form">
                    <div className="form-group">
                        <label htmlFor="destination">Busca tu destino:</label>
                        <div>
                            <input type="text" id="destination" placeholder="Nombre del destino..." />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Selecciona las fechas:</label>
                        <div className='fechas'>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Fecha de inicio"
                                className="datepicker-input"
                            />
                            <span> - </span>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Fecha de fin"
                                className="datepicker-input"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className='label-range'>Precio máximo:</label>
                        <div className='range-container'>
                            <input
                                type="range"
                                id="price"
                                min="0"
                                max="10000000"
                                value={price}
                                onChange={handlePriceChange}  // Asignado al input
                            />
                            <span className="price-label">${price}</span>
                        </div>
                    </div>
                    <button type="submit" className="button-buscar">Buscar</button>
                </div>
            </form>
        </div>
    );
};

export default BuscadorVuelos;
