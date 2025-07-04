/* FATTO IN JSON
//Creato index.js (non nel terminale)

//usato il comando npm init -y per creare il file JSON 

// Crea lo script e farlo partire: --->  "start": "node index.js",

//Crea lo script,fallo partire, cambiando il nostro console.log() cambia la scritta anche nel  terminale --->
"watch": "node --watch index.js"
 */

/*
 ---> 1° BONUS <--- 

 //Installa dotevn ("npm i dotenv" nel terminale) 
 //Aggiungi allo script (--env-file=.env)
 //Crea un .gitignore per nascodere le cartelle non create da noi scrivendo node_modules/
 //crea file .env
 //crea file .env.example
 //nascondi da gitignore il file .env
 //Scrivi una frase segreta su .env
//inserire type module
// Importa il modulo con require  e logga la parola segreta
---> 2° BONUS <--- 
//installa chalk ed axios 
//importa 
 */
import chalk from 'chalk';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();


const endpoint = "https://lanciweb.github.io/demo/api/pictures/"
axios.get(endpoint)
    .then(function (response) {
        // handle success
        console.log(response.data);
        const pictures = response.data

        pictures.forEach(picture => {
            console.log(chalk.green(picture.title))
        });
    })


/* console.log(chalk.blue('Hello') + ' World' + chalk.red('!')); */




console.log(chalk.green("Hello Boolean"))

console.log(chalk.magenta(process.env.SECRET_KEY))



/* process. */