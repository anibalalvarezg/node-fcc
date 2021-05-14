const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    const fsStream  = fs.createReadStream('./content/big.txt', 'utf8')
    fsStream.on('open', () => {
        fsStream.pipe(res)
    })
    fsStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)
