const { readFileSync, writeFileSync} = require('fs') // it's a way to import the content to original export names vars

const first = readFileSync('./basics/modules/built-in modules/data/first.txt', 'utf8') // Sync Operation
const second = readFileSync('./basics/modules/built-in modules/data/second.txt', 'utf8') // Sync Operation

console.log("First Text: "+ first + "\n\nSecond Text:" + second)

writeFileSync(
    './modules/built-in modules/data/result-sync.txt',
    'Here is the result: ' + first + "\n" + second
    // { flag: 'a' } // open the file in the mode 'Append' to won't override the file content
)