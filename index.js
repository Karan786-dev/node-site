const express = require("express");
var  app = express()

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('index',{name : 'Karan'})
})

app.listen(8080)