const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('mysecret'));

app.get('/great', (req, res) => {
    const { name = 'Anonymous', age } = req.cookies;
    res.send(`こんにちは${name}さん。あなたは${age}歳で登録されています`);
})

// res.cookieで、Serverからクライアントのブラウザに対してクッキーを渡す事ができる。
//複数記述する場合は、複数行res.cookieを記載する。
app.get('/setname', (req, res) => {
    res.cookie('name', 'YamadaTaro');
    res.cookie('age', 20);
    res.send('Cookie送ったよ');
})

// res.cookieの第二引数にオブジェクトで\{ shigned: true }を渡す事で、署名付きのCookieを渡す事ができる。
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('署名付きCookie送ったよ');
})

// 署名付きのcookieをServer側で受け取る場合、req.cookiesでは受け取れず、req.signedCookiesと記述することで受け取れる
app.get('/veryfifruit', (req, res) => {
    console.log("req.cookies: ", req.cookies);   //req.cookies:  {}
    console.log("req.signedCookies: ", req.signedCookies);  //req.signedCookies:  [Object: null prototype] { fruit: 'grape' }
    res.send(req.signedCookies);
})

app.listen(3000, (req, res) => {
    console.log('Server起動');
})