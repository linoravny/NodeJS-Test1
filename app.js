
//RUN: $node app.js


//Global Module - (like window in JS)
 //console is a global obj
global.console.log(module);
global.setTimeout(() => {
    console.log('Hello Linor!'); //can call directly without global first
}, 1000);

