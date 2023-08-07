//File System
const fs=require('fs');
const colors = require('colors');
const { crearArchivo } = require('./Helpers/multiplicar');
console.clear();
const [,,arg3='base=10']=process.argv;
const[,base]=arg3.split('=');
console.log(base);

crearArchivo(base)
    .then(nombreArchivo=>console.log(nombreArchivo,'Ha sido creado exitosamente'))
    .catch(err=>console.log(err))


