const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('やっほー');
})

app.get('/setname', (req, res) =>{
    res.cookie('name', 'YamadaTaro');
    res.send('Cookie送ったよ');;
})

app.listen(3000, (req, res) =>{
    console.log('Server起動');
})