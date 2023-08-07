const fs = require('fs');
const colors = require('colors');

console.log('=================='.inverse);
console.log('Suma y resta!!!'.inverse);
console.log('=================='.inverse);

const base = 6;
const num2 = 8;
let suma = '';
let resta = '';

suma += `${base} + ${num2} = ${base + num2}\n`;
resta += `${base} - ${num2} = ${base - num2}\n`;

console.log(colors.rainbow(suma));
console.log(colors.rainbow(resta));

const content = `${suma}\n${resta}`;

fs.writeFile(`SumaRestas.txt`, content, (err) => {
    if (err) throw err;
    console.log(`Archivo SumaRestas.txt creado`);
});