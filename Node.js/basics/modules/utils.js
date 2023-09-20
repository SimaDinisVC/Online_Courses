const sayHi = (name) => {
    console.log(`Hello there ${name}!`);
}

// Default export
module.exports = sayHi

/* Alternative way
module.exports.property_name = ['1'] // It assing a property by default */