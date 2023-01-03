const events = require('events');

let frieIsDoneCallBack = (data) => {
    console.log('Frie number: ', data);
}

let friesEventEmitter = new events.EventEmitter();

friesEventEmitter.on("Frie is done", frieIsDoneCallBack)

friesEventEmitter.emit('Frie is done', 16) 


let serveBurger = (id) => {
    console.log(`Burger ${id} is served`)
}

friesEventEmitter.on('burger_is_done', serveBurger)


const burgerChef = () => {
    //..
    console.log("Finished")
    friesEventEmitter.emit('burger_is_done', 20)
}

burgerChef();