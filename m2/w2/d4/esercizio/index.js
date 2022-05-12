const express = require('express');
const path = require('path');

const app = express();

app.get('/',(req,res) => { 
    res.sendFile(__dirname + '/esercizio.html')

})
app.get('/contatti',(req,res) => { 
    res.sendFile(__dirname + '/contatti.html')

})

app.listen(3000,() => {
    console.log('Server running at http://127.0.0.1:3000')
})