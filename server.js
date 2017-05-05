const express = require('express')
const Path = require('path')
const fs = require('fs')
const app = express()

app.set('port', (process.env.PORT || 4000))

let template = fs.readFileSync(Path.resolve('dist', 'index.html'), 'utf-8')

app.get('/', function (req, res) {
  res.send(template)
})

app.use(express.static(Path.join(__dirname, 'dist')))

app.listen(app.get('port'), function () {
  console.log(`listening on port: ${app.get('port')}`)
})
