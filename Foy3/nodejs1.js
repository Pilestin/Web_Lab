const events = require('events');
const eventEmitter = new events.EventEmitter();
function mesaj(msj) {
console.log(msj);
}
eventEmitter.on('31', mesaj);
eventEmitter.emit('31', 'Dışarıdan bir mesaj');