const express = require("express");
var  app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('home',{name : 'Karan'})
})

app.listen(8080)