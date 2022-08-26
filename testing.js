const express = require('express');
const parser = require('./config/parser');


const app = express()

app.post('/login',parser,(req,res)=>{
    res.send('welcome : '+req.body.name);
})