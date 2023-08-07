const fs=require('fs');
const colors = require('colors');
const crearArchivo=async(base)=>{
    try{
        console.log('=================='.inverse);
        console.log(`Tabla del ${base}==`.inverse);
        console.log('=================='.inverse);
        let salida='';
        for (let i = 1; i <=20; i++) {
            salida+=(`${base} * ${i} = ${base*i}\n`);
            
        }
        console.log(colors.rainbow(salida));
        fs.writeFileSync(`./Salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;
    } catch(err){
        throw err;
    }
}

module.exports={
    crearArchivo
}