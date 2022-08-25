const express = require("express");
const axios = require('axios')
var  app = express()
const path = require('path')
const api_url = 'https://user.devlopath.com/instant/fetch-camp-info.php?token=eeae5f78-a2b1-11ec-958c-7c10c91d52d7'

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',async (req,res)=>{
  let data = await axios.get(api_url)
  console.log(data.data)
  res.render('home',{alldata : data.data})
})

app.listen(8080)