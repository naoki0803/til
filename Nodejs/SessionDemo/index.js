const express  = require('express');
const app = express();
const session = require('express-session');


const sessionOptions = {
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
};
// ミドルウェアを利用する事で、req時にconnect.sid という Keyで
app.use(session(sessionOptions));

app.get('/viewcont', (req, res) => {
    if(req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    //ミドルウェアを利用した状態だと、cookieに｢connect.sid｣ という名前で値が登録される
    res.send(`あなたは${req.session.count}回このページを表示しました。`);
});

app.get('/register', (req, res) => {
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/great');
})

app.get('/great', (req, res) => {
    const { username } = req.session;
    res.send(`ようこそ${username}さん`);
})

app.listen(3000, (req, res) => {
    console.log('PORT 3000 で待機中');
}); {}