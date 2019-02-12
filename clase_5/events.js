const EventEmitter = require('events')

class FileEventEmitter extends EventEmitter {}
const myFileEventEmitter = new FileEventEmitter()
//const end = () => console.log('Termino el proceso')

function end(){
  console.log('termino el proceso')
}

myFileEventEmitter.on('ENDFILE', end)

setTimeout(() => {
  myFileEventEmitter.emit('ENDFILE')
}, 3000);