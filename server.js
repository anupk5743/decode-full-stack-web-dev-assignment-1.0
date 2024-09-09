/****
 * Q1. write a node.js program that create a simple HTTP server. when a client sends a request to the server,\
 */

//import the http module
const http = require('http');

//Define the port number
const port = 3000;

//create a server
const server = http.createServer((req, res)=>{
    //set the response status code and headers
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');

    //send the response
    res.end('Hello student!\n');
});

//listen for incoming requests
server.listen(port, ()=>{
    console.log('Server running on the port ',port)
});