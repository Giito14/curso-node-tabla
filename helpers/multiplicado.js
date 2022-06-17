const fs = require(`fs`); // Se import a el modulo fs para manejo de archivos
const colors = require('colors'); // Importando el modulo colors
const crearArchivo = (base = 5, listar, hasta) => {
    return new Promise ((resolve,reject)=>{

        let salida = "";
        let consola = ""; // Creamos una nueva variable para almacena lo que se mostrara en consola para que no se guarde con los caracteres especiales de los colores
        for (let i=1; i<=hasta ;i++ ){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${"x".green} ${i} = ${base*i}\n`;
        }   
        if (listar) {console.log("===============".random),
            console.log("Tabla del:".random, colors.red(base)),
            console.log("===============".random),
            console.log(consola)
        }
        
        /*fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
            if (err) throw err; // Si ocurre un error

            console.log(`tabla-${base}.txt creado`); //Si todo sale bien
        })*/
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //Usando el writeFileSync es mas sencillo pero en caso de error usamos el try catch

        (`tabla-${base}.txt`)
            ?resolve(`tabla-${base}.txt`) 
            :reject(`Error al crear archvio`)
    })
}

module.exports = {
    crearArchivo
}