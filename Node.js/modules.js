// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./modules/names')
const sayHi = require('./modules/utils')

sayHi("susan")
sayHi(names.john)
sayHi(names.simon)

console.log() 

require('./modules/sum') // It executes the code in the module

/* ./modules/built-in modules

    OS (OPERATIVE SYSTEM)

    PATH

    FS (FILESYSTEM)

    HTTP
*/