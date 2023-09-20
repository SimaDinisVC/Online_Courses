const express = require('express'); // importing the module
const app = express(); // our app will be equal to an express object reference
const port = 5000

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found<h1>')
})

app.listen(port, () => {
    console.log(`Server Listening on port: ${port}`)
})

// main methods 
/*
    app.get // read data
    app.post // insert data
    app.put // update data (if doesn't exists creats it)
    app.delete // delete data
    app.all // all type of requests
    app.use // middleware
    app.listen // wait for connection with a client
*/