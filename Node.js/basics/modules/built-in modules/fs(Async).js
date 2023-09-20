const { readFileSync, writeFileSync} = require('fs') // it's a way to import the content to original export names vars

readFileSync('./basics/modules/built-in modules/data/first.txt', 'utf8', (err, result) => { // ASync Operation
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFileSync('./basics/modules/built-in modules/data/second.txt', 'utf8', (err, result) => { // ASync Operation
        if (err){
            console.log(err)
            return
        }
        const second = result
        writeFileSync(
            './basics/modules/built-in modules/data/result-async.txt',
            'Here is the result: ' + first + "\n" + second,
            // { flag: 'a' }, // open the file in the mode 'Append' to won't override the file content
            (err, result) =>{
                if (err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    }) 
})