const http = require('http');

//based on event emitter
// for clean backhand with more route we will use an Express framework 
const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.write('Hello Linor');
        res.end();
    }

    if(req.url === '/api/users') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000); //port
console.log('Listening to port 3000: http://localhost:3000/');

