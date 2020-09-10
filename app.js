const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users');


const app=express();

const dbURI = 'mongodb+srv://santaclaus000:Youneverknow@123@cluster0.2k2hp.mongodb.net/users?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result)=> app.listen(4000))
  .catch((err)=>console.log(err));

app.set('view engine', 'ejs');

console.log('Listening for requests on port 4000');

app.get('/', (req,res)=>{
  res.redirect('details');
})

app.get('/details', (req,res)=>{
  User.find()
  .then((result)=>{
    res.render('details', {details: result})
  })
  .catch((err)=>{
    console.log(err);
  })
})

app.use((req,res)=>{
  res.status(404).render('404');
})
