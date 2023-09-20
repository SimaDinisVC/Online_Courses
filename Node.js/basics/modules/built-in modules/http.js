const http = require('http')

const server = http.createServer((req, res) =>{
    console.log('An user request the page!')
    if (req.url === '/'){
        res.write('Welcome to our home page')
        res.end()
    }
    else if (req.url === '/about'){
        res.write('Welcome to our about page')
        res.end()
    }
    else{
        res.end(`<h1>Opps, you've losted in the webpage!</h1>`)
    }
})

server.listen(5000)