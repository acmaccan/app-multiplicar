// Importar FileSystem
const fs = require('fs');

const colors = require('colors');

// Función creada para multiplicar cualquier tabla en la consola a partir de un ciclo for
const crearArchivo = async(base = 1, hasta = 10, listar = false) => {
    try {
        let salida = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        
        if(listar){
            console.log('=================='.cyan);
            console.log('Tabla del'.cyan, colors.cyan(base));
            console.log('=================='.cyan);
            console.log(salida);        
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
    
}

// Hacer disponible la función para ser exportada a app
module.exports = {
    crearArchivo
}