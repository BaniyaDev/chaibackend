const express = require('express')  // this is for the import 
const app = express()   // now app is the variable  
const port = 4000

app.get('/', (req, res) => {      // call back function 
  res.send('Hello World!')
})

app.get('/twitter' ,(req, res)=>{
   res.send('kritagyaMittal')

})

app.get('/login' ,(req, res)=>{
  res.send('kritagyaMittal')

})
    app.get('/youtube',(req,res)=>{
      res.send("<h2>  Chai aur code </h2>")
    })



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})