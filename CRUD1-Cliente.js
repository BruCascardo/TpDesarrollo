import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Cliente = {
  init(firstName, lastName, age, email, DNI, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.DNI = DNI;
    this.birthDate = birthDate;
  },
};

let clientes = [];

const addCliente = (firstName, lastName, age, email, DNI, birthDate) => {
  const cliente = Object.create(Cliente);
  cliente.init(firstName, lastName, age, email, DNI, birthDate);
  clientes.push(cliente);
};
// commit
const handleInput = () => {
  console.log('1. Agregar cliente\n2. Mostrar clientes\n3. Salir');
  rl.question('Ingrese una opción: ', (input) => {
    const op = parseInt(input.trim());
    switch (op) {
      case 1:
        rl.question('Ingrese el nombre del cliente: ', (firstName) => {
          rl.question('Ingrese el apellido del cliente: ', (lastName) => {
            rl.question('Ingrese la edad del cliente: ', (age) => {
              rl.question('Ingrese el email del cliente: ', (email) => {
                rl.question('Ingrese el DNI del cliente: ', (DNI) => {
                  rl.question(
                    'Ingrese la fecha de nacimiento del cliente: ',
                    (birthDate) => {
                      addCliente(
                        firstName,
                        lastName,
                        parseInt(age),
                        email,
                        DNI,
                        birthDate
                      );
                      handleInput();
                    }
                  );
                });
              });
            });
          });
        });
        break;
      case 2:
        console.log(clientes);
        handleInput();
        break;
      case 3:
        console.log('Adiós');
        rl.close();
        break;
      default:
        console.log('Opción inválida');
        handleInput();
        break;
    }
  });
};

handleInput();
