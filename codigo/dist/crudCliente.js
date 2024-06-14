import express from 'express';
import { Cliente } from './cliente.js';
const app = express();
app.use(express.json());
//Date format: YYYY-MM-DD
const clientes = [
    new Cliente('Bruno', 'Cascardo', '12345678', 'bruno@gmail.com', new Date('2004-05-23')),
    new Cliente('Jano', 'Martinez', '2058365', 'jano@gmail.com', new Date('2000-07-04')),
];
// Middleware para sanitizar la entrada de los clientes
function sanitizeClienteInput(req, res, next) {
    req.body.sanitizedInput = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        email: req.body.email,
        fechaNacimiento: req.body.fechaNacimiento,
    };
    // Eliminar propiedades indefinidas
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key];
        }
    });
    next();
}
// OBTENER TODOS LOS CLIENTES
app.get('/api/clientes', (req, res) => {
    res.json({ data: clientes });
});
// OBTENER UN CLIENTE
app.get('/api/clientes/:dni', (req, res) => {
    const cliente = clientes.find((c) => c.dni === req.params.dni);
    if (!cliente) {
        res.status(404).send({ message: 'Cliente not found' });
    }
    else {
        res.json({ data: cliente });
    }
});
// CREAR UN CLIENTE
app.post('/api/clientes', sanitizeClienteInput, (req, res) => {
    const input = req.body.sanitizedInput;
    const newCliente = new Cliente(input.nombre, input.apellido, input.dni, input.email, input.fechaNacimiento);
    clientes.push(newCliente);
    res.status(201).json({ message: 'Cliente created', data: newCliente });
});
// MODIFICAR UN CLIENTE COMPLETAMENTE
app.put('/api/clientes/:dni', sanitizeClienteInput, (req, res) => {
    const indexC = clientes.findIndex((c) => c.dni === req.params.dni);
    if (indexC === -1) {
        res.status(404).send({ message: 'Cliente not found' });
    }
    clientes[indexC] = { ...clientes[indexC], ...req.body.sanitizedInput };
    res
        .status(200)
        .json({ message: 'Cliente updated', data: clientes[indexC] });
});
// MODIFICAR UN CLIENTE PARCIALMENTE
app.patch('/api/clientes/:dni', sanitizeClienteInput, (req, res) => {
    const indexC = clientes.findIndex((c) => c.dni === req.params.dni);
    if (indexC === -1) {
        res.status(404).send({ message: 'Cliente not found' });
    }
    clientes[indexC] = { ...clientes[indexC], ...req.body.sanitizedInput };
    res
        .status(200)
        .json({ message: 'Cliente updated', data: clientes[indexC] });
});
// BORRAR UN CLIENTE
app.delete('/api/clientes/:dni', (req, res) => {
    const indexC = clientes.findIndex((c) => c.dni === req.params.dni);
    if (indexC === -1) {
        res.status(404).send({ message: 'Cliente not found' });
    }
    clientes.splice(indexC, 1);
    res.status(200).json({ message: 'Cliente deleted' });
});
// LISTEN
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
//# sourceMappingURL=crudCliente.js.map