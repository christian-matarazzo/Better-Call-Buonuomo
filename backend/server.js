const express = require('express')
const app = express()
const cors = require("cors") /* cors import */
const port = 3000

app.use(cors()) /* avoid communication issues from backend and front end on the same machine */

app.use(express.json()) /* body parser to read req.body converting data in a js object */


app.get('/', (req, res) => {
  res.send('Benvenuto al server Better Caul Buonuomo')
})

app.post('/api/contact', (req, res) => {
  const {Name, LastName, Email} = req.body

  if(!Name || !LastName || !Email ){
   return res.status(400).json({success: false, messagge:"All Data must be inserted"})
  }


  console.log("Recived Data", req.body);
  res.status(200).json({success: true, message:"Contact Received"})
  
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})