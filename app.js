const express = require('express');

app.set('view engine', 'ejs');

app.listen(4000);

console.log('Listening for requests on port 4000');

app.get('/details', (req,res)=>{

})

app.use((req,res)=>{
  res.status(404).render('404');
})
