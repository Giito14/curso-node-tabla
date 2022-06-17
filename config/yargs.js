const argv= require(`yargs`)// Importamos el argv del yargs
     .option(`b`,{       // b es la forma corta del "alias" y el type es el tipo con el comando --help acceso a las opciones
         alias: `base`,
         type: `number`,
         demandOption: true, // Obliga e introducir una opcion en este caso la base
         describe:`Es la base de la tabla `
        })
        .option(`l`,{
             alias: `listar`,
             type: `boolean`,
             default: false,
             describe:`Lista la tabla `
        })
        .option(`h`,{
            alias: `hasta`,
            type: `number`,
            default: 10,
            describe:`Hasta donde se creara la table `
       })
        .check((argv,options)=>{  // Verifica que se cumplan ciertas condiciones
              if( isNaN(argv.b)){
                 throw `La base debe ser un numero`
            }
            return true;
         })
        .argv;

module.exports = argv; //Exportamos el argv con el yargs