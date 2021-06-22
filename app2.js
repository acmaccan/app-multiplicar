// Importar la función multiplicar
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    })
                    .check((argv, options) =>{
                        if(isNaN(argv.b)) {
                            throw 'La base tiene que ser un número'
                        } 
                        return true;
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false
                    })
                    .argv;

// Limpiar consola
console.clear();

console.log(argv);

//console.log('base: yargs', argv.base);

// Para ver lo que pasamos por consola
// console.log(process.argv);

// Para pasarle base por consola - No recomendable para nada
// Existen paquetes para manejar cuidadosamente estos valores
// Que ingresan por consola
/*const[ , , arg3 = 'base=5'] = process.argv;
const[ , base = 5 ] = arg3.split('=');*/

// Declarar y asignar un valor a base
// const base = 4;

// Llamar la función
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
