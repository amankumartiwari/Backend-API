const express = require('express');
const app = express();
const port = 8888; 
const mongoose = require('mongoose');
let bodyParser = require('body-parser')
const passport =require('passport');
const passportLocal = require('./config/passport');
const db = require('./config/mongoose');
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: false }))
 
// parsing application/json
app.use(bodyParser.json())
app.use(passport.initialize());


app.use('/', require('./routes'));


app.listen(port,(err)=>{
    if(err){
        console.log("error in runnning server");
        return;
    }
    console.log(`server is running at port: ${port}`);
}) 