const EventEmitter = require('events'); 
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(msg) {
        // Send an Http request
        console.log(msg);
        //Raise an event
        this.emit('messageLogged',{id:1, url:'http://'}); //this reference to Logger class that extends EventEmitter
    }
}

module.exports = Logger; 

