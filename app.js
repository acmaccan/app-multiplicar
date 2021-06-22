// Importar la función multiplicar
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// Limpiar consola
console.clear();

// Llamar la función
crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err));
