const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('mysecret'));

app.get('/great', (req, res) => {
    const { name = 'Anonymous', age } = req.cookies;
    res.send(`こんにちは${name}さん。あなたは${age}歳で登録されています`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'YamadaTaro');
    res.cookie('age', 20);
    res.send('Cookie送ったよ');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('署名付きCookie送ったよ');
})

app.get('/veryfifruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})
app.listen(3000, (req, res) => {
    console.log('Server起動');
})