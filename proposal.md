# Propuesta TP DSW

## Grupo
### Integrantes
* 51564 - Cascardo, Bruno
* 50489 - Dragotta, Tomás
* 51331 - Alaniz, Juan Francisco
* 51200 - Martinez, Jano

## Tema
### Descripción
*El sistema de gestión para la agencia de turismo automatiza procesos de alta, baja, modificación y consulta de destinos, excursiones y clientes. Permite la creación flexible de paquetes de viaje e integra un módulo de reservas en línea. Incluye herramientas para seguimiento de consultas y quejas, garantizando una gestión eficiente y transparente.*

### Modelo
![Modelo de Clases](https://github.com/BruCascardo/TpDesarrollo/blob/main/DCdsw.jpg)

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Paquete<br>2. CRUD Cliente<br>3. CRUD Ciudad<br>4.CRUD Tipo Transporte|
|CRUD dependiente|1. CRUD Transporte {depende de} CRUD Tipo Transporte<br>2. CRUD Excursión {depende de} CRUD Ciudad|
|Listado<br>+<br>detalle| 1. Listado de paquetes filtrado por ciudad, muestra nro, excursiones y transporte => detalle CRUD Paquete<br> 2. Listado de paquetes filtrado por rango de fecha, muestra nro, excursiones, transporte y ciudad => detalle muestra datos completos del paquete y 
|CUU/Epic|1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Tipo Habitacion<br>2. CRUD Servicio<br>3. CRUD Localidad<br>4. CRUD Provincia<br>5. CRUD Habitación<br>6. CRUD Empleado<br>7. CRUD Cliente|
|CUU/Epic|1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva<br>3. Realizar el check-out y facturación de estadía y servicios|


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
|Listados |1. Estadía del día filtrado por fecha muestra, cliente, habitaciones y estado <br>2. Reservas filtradas por cliente muestra datos del cliente y de cada reserve fechas, estado cantidad de habitaciones y huespedes|
|CUU/Epic|1. Consumir servicios<br>2. Cancelación de reserva|
|Otros|1. Envío de recordatorio de reserva por email|
