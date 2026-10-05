const http = require('http')

const PORT = process.env.PORT || 3000

function greet(name) {
  return `Hello, ${name || 'DevOps'}!`
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end(greet())
})

if (require.main === module) {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

module.exports = { greet, server }
