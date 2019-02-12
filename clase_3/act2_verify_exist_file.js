const fs = require('fs');
const file = 'files/file_open.txt';

fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// fs.open(file, 'wx', (err, fd) => {
//   if (err) {
//     if (err.code === 'EEXIST') {
//       console.error('myfile already exists');
//       return;
//     }
//     throw err;
//   }else {console.log(err)} //si no existe regresa nullo y crea el archivo
// });