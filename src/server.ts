import express, { Request, Response } from 'express';
import path from 'path';

// Importar los CRUDs
const crudCliente = require('../codigo/dist/controllers/crudCliente');
const crudCiudad = require('../codigo/dist/controllers/crudCiudad');

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Rutas CRUD
app.use('/api/cliente', crudCliente);
app.use('/api/ciudad', crudCiudad);

// Servir el frontend de React
app.use(express.static(path.join(__dirname, 'dist')));

// Todas las demás rutas deben servir el archivo index.html
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});