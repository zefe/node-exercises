//MANEJO DE ERRORES
// console.log(ReferenceError)
// console.log(Error)
// //EXCEPTION
// error !== error 

function breakingCode() {  
  throw new Error('Houston ')
  console.log('hubo un error')
}

try {
  breakingCode()
}catch(error){
  console.log(error)
  console.log('Estamos ok')
}