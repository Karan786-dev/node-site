const express = require("express");
const axios = require('axios')
var  app = express()
const path = require('path')

const token = 'Your Token Here'
const api_url = 'https://user.devlopath.com/instant/fetch-camp-info.php?token='+token+''

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
    let data = await axios.get('https://api.devlopath.com/checkref?token='+token+'&number='+number+'&offerid='+offer_id+'')
    let ref_count = data.data.total_refers
    let response = await axios.get(api_url)
    var offer_name;
    response.data.forEach((i) =>{
      if(i.offerid == offer_id){
        offer_name = i.name
      }
    })
    res.render('final_page',{offer_name : offer_name , ref_count : ref_count})
  }
})

app.listen(8080)