/***
 * Q2.-- write a node.js program that reads content from a file named 
 * "input.txt" and writes the content to a new file named "output.txt"
 */


const fs = require('fs').promises;

async function readFileAndWrite() {
  try {
    const inputFile = 'input.txt';
    const outputFile = 'output.txt';

    console.log(`Reading from ${inputFile}...`);
    const data = await fs.readFile(inputFile, 'utf8');
    console.log(`Read ${data.length} bytes from ${inputFile}`);

    console.log(`Writing to ${outputFile}...`);
    await fs.writeFile(outputFile, data);
    console.log(`Wrote ${data.length} bytes to ${outputFile}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

readFileAndWrite();