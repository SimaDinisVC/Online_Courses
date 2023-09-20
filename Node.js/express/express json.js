const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.json( [{ 'hello': 5000}, { 'hello': 5000}])
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})