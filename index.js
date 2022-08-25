const express = require("express");
var  app = express()

app.set('view' , 'ejs');

app.get('/',(req,res)=>{
  res.render('home',{name : 'Karan'})
})

app.listen(8080)