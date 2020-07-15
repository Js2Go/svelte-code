const net = require('net')
const port = 8000
const hostname = '127.0.0.1'

let clients = {}
let clientName = 0

const server = new net.createServer(socket => {
  socket.on('data', buffer => {
    console.log(buffer.toString())
    // socket.
  })
})

server.listen(port, hostname)
