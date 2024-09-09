/***
 * Q3.--> Write a Node.js program that creates an HTTP server and handles different routes. The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route#
 */

// Import the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle the root route ("/")
if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
} 
  // Handle any other route
else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page Not Found\n');
}
});

// Set the port number
const port = 3000;

// Start the server
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});