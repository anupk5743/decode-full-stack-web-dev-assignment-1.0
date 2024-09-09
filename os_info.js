/***
 *Q4.-->Write a Node.js program that uses the OS module to retrieve information about the current operating system# 
*/

// Import the os module
const os = require('os');

// Retrieve and display OS information
console.log('Operating System:', os.type());
console.log('OS Platform:', os.platform());
console.log('OS Release:', os.release());
console.log('OS Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Total Memory:', os.totalmem() / (1024 * 1024 * 1024) + ' GB');
console.log('Free Memory:', os.freemem() / (1024 * 1024 * 1024) + ' GB');
console.log('CPU Count:', os.cpus().length);
console.log('CPU Info:');
console.log(os.cpus());
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('Uptime:', os.uptime() + ' seconds');