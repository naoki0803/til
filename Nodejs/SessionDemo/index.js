const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
};
// ミドルウェアを利用する事で、req時にconnect.sid という Keyで
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
})


app.get('/viewcont', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    //ミドルウェアを利用した状態だと、cookieに｢connect.sid｣ という名前で値が登録される
    res.send(`あなたは${req.session.count}回このページを表示しました。`);
});

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;

    //flashを利用して初回だけ表示される値を設定する
    req.flash('success', '新規にusernameが登録されました');
    res.redirect('/great');
})

app.get('/great', (req, res) => {
    const { username } = req.session;
    // res.send(`ようこそ${username}さん${req.flash('success')}`);
    // res.render('./index', {username: username, messages: req.flash('success') }); //res.localsを利用しない場合の記述
    res.render('index', {username: username});    //res.localsを利用する場合の記述
})

app.listen(3000, (req, res) => {
    console.log('PORT 3000 で待機中');
});