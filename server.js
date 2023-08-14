const http = require('http')
const { hostname } = require('os')
const host = '0.0.0.0'
const port = 3000


const app = http.createServer((req, res)=>{
    res.statusCode=200
    res.setHeader('content-type','text/plain')
    res.end('<h1> Anih server</h1>')
})

app.listen(port,host,()=>{
    console.log(`server started at http://${host}:${port}/`);
})