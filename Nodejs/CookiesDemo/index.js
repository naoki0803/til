const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/great', (req, res) => {
    const {name = 'Anonymous', age} = req.cookies;
    res.send(`こんにちは${name}さん。あなたは${age}歳で登録されています`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'YamadaTaro');
    res.cookie('age', 20);
    res.send('Cookie送ったよ');;
})

app.listen(3000, (req, res) => {
    console.log('Server起動');
})