const express = require('express'); // importing the module
const app = express(); // our app will be equal to an express object reference
const port = 5000

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).send('./express/navbar-app/index.html') // or res.status().sendFile()
//     // adding static assets like a html page 
//     // or we can
//     // SSR (Server Side Render)   5:51
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(port, () => {
    console.log(`Server Listening on port: ${port}`)
})