const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base'.green.underline,
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'.green.inverse
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        } 
        return true;
    })
    .option('l', {
        alias: 'listar'.cyan.underline,
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'.cyan.inverse
    })
    .option('h', {
        alias: 'hasta'.magenta.underline,
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Hasta que número se va a multiplicar'.magenta.inverse
    })
    .argv;

module.exports = argv;