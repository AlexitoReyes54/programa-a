const express = require('express')
const app = express()
const port = 4000
let {apap} = require('./apap')

app.post('/start', (req, res) => {
    apap()
    res.send('Done')
  })

  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app  2 bro listening on port ${port}`)
})