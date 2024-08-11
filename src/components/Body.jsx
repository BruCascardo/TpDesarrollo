import React, { useState } from 'react';
import '../styles/Body.css';

const BuscadorVuelos = () => {
    const [tipoViaje, setTipoViaje] = useState('ida-vuelta');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            tipoViaje,
        });
    };

    return (
        <div className="contenedor-buscador">
            <form onSubmit={handleSubmit} className="formulario-buscador">
                <h2>Encontrá los mejores vuelos con reserva flexible.</h2>
                <div className="tipo-viaje">
                    
                    <label>
                        <input
                            type="radio"
                            value="ida-vuelta"
                            checked={tipoViaje === 'ida-vuelta'}
                            onChange={() => setTipoViaje('ida-vuelta')}
                        />
                        Ida y vuelta
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="solo-ida"
                            checked={tipoViaje === 'solo-ida'}
                            onChange={() => setTipoViaje('solo-ida')}
                        />
                        Solo ida
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="multidestino"
                            checked={tipoViaje === 'multidestino'}
                            onChange={() => setTipoViaje('multidestino')}
                        />
                        Multidestino
                    </label>
                    <button type="button" className="boton-agregar-alojamiento">Agregar Alojamiento</button>
                </div>
                <div className="grupo-input">
                    <label>Origen</label>
                    <input
                        type="text"
                        placeholder="Ingresa una ciudad"
                    />
                </div>
                <div className="grupo-input">
                    <label>Destino</label>
                    <input
                        type="text"
                        placeholder="Ingresa una ciudad"
                    />
                </div>
                <div className="grupo-input">
                    <label>Salida</label>
                    <input
                        type="date"
                    />
                </div>
                <div className="grupo-input">
                    <label>Regreso</label>
                    <input
                        type="date"
                    />
                </div>
                <div className="grupo-input">
                    <label>Personas</label>
                    <input
                        type="number"
                        min="1"
                        defaultValue={1}
                    />
                </div>
                <div className="grupo-input">
                    <label>Clase</label>
                    <select>
                        <option value="todas">Todas</option>
                        <option value="economica">Económica</option>
                        <option value="ejecutiva">Ejecutiva</option>
                        <option value="primera">Primera clase</option>
                    </select>
                </div>
                <div className="grupo-input">
                    <label>
                        <input
                            type="checkbox"
                        />
                        Todavía no tengo fecha definida
                    </label>
                </div>
                <button type="submit" className="boton-buscar">BUSCAR</button>
            </form>
        </div>
    );
};

export default BuscadorVuelos;