const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Benvenuto al server Better Caul Buonuomo')
})

app.post('/', (req, res) => {
  res.send("This is a post request")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})