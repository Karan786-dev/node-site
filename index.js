const express = require("express");
const axios = require('axios')
var  app = express()
const path = require('path')
const api_url = 'https://user.devlopath.com/instant/fetch-camp-info.php?token=eeae5f78-a2b1-11ec-958c-7c10c91d52d7'

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',async (req,res)=>{
  let data = await axios.get(api_url)
  res.render('home',{alldata : data.data})
})

app.get('/refer-data',async (req,res)=>{
  var offer_id = req.query.offer
  var number = req.query.paytm
  if(offer_id || number){
    let data = await axios.get('https://api.devlopath.com/checkref?token=eeae5f78-a2b1-11ec-958c-7c10c91d52d7&number='+number+'&offerid='+offer_id+'')
    let ref_count = data.data.total_refers
    console.log(ref_count)
  }
})

app.listen(8080)