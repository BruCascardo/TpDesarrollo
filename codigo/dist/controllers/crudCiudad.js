import express from 'express';
import { Ciudad } from '../models/ciudad.js';
import { Ciudad } from '../models/ciudad.model.js';
const app = express();
app.use(express.json());
//Date format: YYYY-MM-DD
const ciudades = [
    new Ciudad(1, 'Buenos Aires', 'En Buenos Aires podes encontrar una gran variedad de actividades para realizar, desde recorrer el barrio de San Telmo, hasta visitar el Obelisco.'),
    new Ciudad(2, 'Pergamino', 'En Pergamino podes encontrar una gran variedad de actividades para realizar, desde recorrer el arroyo Pergamino, hasta visitar la plaza 25 de Mayo.'),
    new Ciudad(2, 'Pergamino', 'En Pergamino podes encontrar una gran variedad de actividades para realizar, desde recorrer el arroyo Pergamino, hasta visitar la plaza 25 de Mayo.')
];
// Middleware para sanitizar la entrada de los clientes
function sanitizeCiudadInput(req, res, next) {
    req.body.sanitizedInput = {
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
    };
    // Eliminar propiedades indefinidas
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
// OBTENER TODAS LAS CIUDADES
app.get('/api/ciudades', (req, res) => {
    res.json({ data: ciudades });
});
// OBTENER UNA CIUDAD
app.get('/api/ciudades/:id', (req, res) => {
    const ciudad = ciudades.find((c) => c.id === parseInt(req.params.id));
    if (!ciudad) {
        res.status(404).send({ message: 'Ciudad not found' });
    }
    else {
        res.json({ data: ciudad });
    }
});
// CREAR UNA CIUDAD
app.post('/api/ciudades', sanitizeCiudadInput, (req, res) => {
    const input = req.body.sanitizedInput;
    const newCiudad = new Ciudad(input.id, input.nombre, input.descripcion);
    ciudades.push(newCiudad);
    res.status(201).json({ message: 'Ciudad created', data: newCiudad });
});
// MODIFICAR UNA CIUDAD COMPLETAMENTE
app.put('/api/ciudades/:id', sanitizeCiudadInput, (req, res) => {
    const indexC = ciudades.findIndex((c) => c.id === parseInt(req.params.id));
    if (indexC === -1) {
        res.status(404).send({ message: 'Ciudad not found' });
    }
    ciudades[indexC] = req.body.sanitizedInput;
    res.status(200).json({ message: 'Ciudad updated', data: ciudades[indexC] });
});
// MODIFICAR UNA CIUDAD PARCIALMENTE
app.patch('/api/ciudades/:id', sanitizeCiudadInput, (req, res) => {
    const indexC = ciudades.findIndex((c) => c.id === parseInt(req.params.id));
    if (indexC === -1) {
        res.status(404).send({ message: 'Ciudad not found' });
    }
    ciudades[indexC] = { ...ciudades[indexC], ...req.body.sanitizedInput };
    res.status(200).json({ message: 'Ciudad updated', data: ciudades[indexC] });
});
// BORRAR UN CLIENTE
app.delete('/api/ciudades/:id', (req, res) => {
    const indexC = ciudades.findIndex((c) => c.id === parseInt(req.params.id));
    if (indexC === -1) {
        res.status(404).send({ message: 'Ciudad not found' });
    }
    ciudades.splice(indexC, 1);
    res.status(200).json({ message: 'Ciudad deleted' });
});
// LISTEN
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
//# sourceMappingURL=crudCiudad.js.map