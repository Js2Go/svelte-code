const http = require('http')

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  const random = Math.floor(Math.random() * 1000 * 2)
  console.log(random)
  setTimeout(() => {
    if (random > 1500) {
      res.writeHead(500)
      res.end(`Timeout with ${random}ms`)
      return
    }
    res.end(`${Math.floor(Math.random() * 100)}`)
  }, random)
}).listen(9988)
