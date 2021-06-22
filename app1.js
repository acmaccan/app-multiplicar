// Imprimir tabla del 5 en la consola a partir de un ciclo for

// Versión node
const fs = require('fs');

console.clear();

const base = 3;
let salida = '';

console.log('=================');
console.log('Table del', base);
console.log('=================');

for(let i = 1; i <= 10; i++){
    salida += `${base} * ${i} = ${base * i}\n`;
}

console.log(salida);

// writeFileSync
fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`tabla-${base}.txt creado`);
// Si esto tuviera errores habría que controlarlos a través de un try - catch

//writeFile
/*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`tabla-${base}.txt creado`);
})*/

//Versión local en consola
/*console.clear();

console.log('=================');
console.log('Table del 5');
console.log('=================');

const base = 5;

for(let i = 1; i <= 10; i++){
    let j = i * 5;
    //console.log('base', *, i, '= ', j);
    console.log(`${base} * ${i} = ${j}`);
}*/

