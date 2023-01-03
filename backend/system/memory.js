let initialMemory = process.memoryUsage().heapUsed;

console.log(`First : ${initialMemory}`);

let wordArray = [];

for(let i = 0; i < 1500; i++){
    wordArray.push(i);
}

console.log(`Second : ${process.memoryUsage().heapUsed}`)

