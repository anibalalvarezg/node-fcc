const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved name ${name} with id ${id}`)
})

customEmitter.emit('response', 'Aníbal', 28)