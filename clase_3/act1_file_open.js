//ACTIVIDAD 1 - ABRIR ARCHIVOS
const fs = require('fs');
const file = 'files/file_open.txt';

fs.open(file, 'r', (err, fd) => {
  if (err) throw err;
  console.log(fd);
});