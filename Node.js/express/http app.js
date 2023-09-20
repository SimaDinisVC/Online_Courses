const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./express/navbar-app/index.html')
const homeStyles = readFileSync('./express/navbar-app/style.css')
const homeImage = readFileSync('./express/navbar-app/logo.svg')
const homeLogic = readFileSync('./express/navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    if (req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (req.url === '/style.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if (req.url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if (req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/js'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/html'}) 
        res.write('<h1>Error 404</h1>')
        res.end('Page Not Found')
    }
})

server.listen(5000)