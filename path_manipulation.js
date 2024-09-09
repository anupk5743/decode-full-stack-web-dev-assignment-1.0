/***
 *Q5.--> Write a Node.js program that uses the Path module to manipulate file paths
 */
// Import the path module
const path = require('path');

// Define a file path
const filePath = '/home/user/documents/file.txt';

// Retrieve the directory name
console.log('Directory Name:', path.dirname(filePath));

// Retrieve the file name
console.log('File Name:', path.basename(filePath));

// Retrieve the file extension
console.log('File Extension:', path.extname(filePath));

// Join multiple paths
const dirPath = '/home/user/documents';
const fileName = 'file.txt';
console.log('Joined Path:', path.join(dirPath, fileName));

// Resolve a path to its absolute path
const relativePath = './file.txt';
console.log('Absolute Path:', path.resolve(relativePath));

// Normalize a path
const normalizedPath = path.normalize('/home/user//documents/./file.txt');
console.log('Normalized Path:', normalizedPath);

// Check if a path is absolute
console.log('Is Absolute Path:', path.isAbsolute(filePath));

// Parse a path into its components
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);

// Format a path from its components
const formattedPath = path.format({
dir: '/home/user/documents',
base: 'file.txt',
ext: '.txt',
name: 'file',
root: '/'
});
console.log('Formatted Path:', formattedPath);