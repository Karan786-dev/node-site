const express = require("express");
var  app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  const data = [
    {
    name : 'Karan',
    },
    {
      name : 'Arsh'
    }
  ]
  res.render('home',{alldata : data})
})

app.listen(8080)