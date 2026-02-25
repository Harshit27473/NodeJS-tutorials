const eventEmitter = require('events')
const customEmitter = new eventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`the name of the user is ${name} and the id is ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})
customEmitter.emit('response','john',34)