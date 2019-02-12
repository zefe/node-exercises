const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//rl.question(string, funcion)

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

const answers = {}

function handleFirstAnswer(answer) {
  answers.first = answer;
  
  
}

//Asi debemos declarar las funciones para los ejercicios

function printName (nombre) {
  console.log(`Mucho gusto: ${nombre}`);
  rl.close();
}
rl.question(`Cual es tu nombre? `, printName);

// function question(message, callback){
//   /* a lot of things */
//   callback(data)
// }

