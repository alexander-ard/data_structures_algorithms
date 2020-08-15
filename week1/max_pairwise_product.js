// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here

    arr = arr.map(x => {return parseInt(x)}).sort((x, i) => x - i);
    return parseInt(arr[arr.length -1]) * parseInt(arr[arr.length - 2]);
}

module.exports = max;
