
//RUN: $node app.js OR jshint app.js
//user global module - (like window in JS)

global.console.log(module);
global.setTimeout(() => { //es6
    console.log('Hello Linor!'); //can call directly without global first
}, 500);

// use Logger Class extends Event Emmiter
const Logger = require('./logger'); //best practics - const and not var, prevent error on run time
const EventEmitter = require('events'); // for event emitter class!
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg)=>{
    console.log('events; Listener called ', arg)
});

logger.log('message');



