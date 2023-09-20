const {createReadStream} = require('fs');

const stream = createReadStream('./basics/streams/big.txt', 'utf-8');

stream.on('data', (result) => {
    console.log(result)
} )

stream.on('error', (err) => {
    console.log(err)
})