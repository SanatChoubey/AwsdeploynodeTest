const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send({
    success: true,
    data: []
  })
})
const Port = process.env.Port||8080
app.listen(Port)
