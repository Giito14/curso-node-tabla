
const {crearArchivo } =  require(`./helpers/multiplicado`); //Importamos la funcion crearArchivo desde multiplicador
const argv = require(`./config/yargs`); // Importamos el argv desde el arquivo yargs

console.clear();
//console.log(process.argv); // Argv de node
//console.log(argv)// argv de yargs

//console.log(`base : yargs`, argv.base); // Acceso a la base, el argv de yargs recibe los datos como un objeto 


/*const [,, arg3=`base=5`]=process.argv; // Destructuracion del arreglo generado por la consola al ingresar el dato 
const [,base=5] = arg3.split(`=`);// Ahora separo el string en un arreglo para extraer el numero que es la base
console.log(base);*/

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, `creado`))
    .catch(err => console.log(err));





