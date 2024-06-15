const express = require('express');
const app = express();
const User = require('./models/user')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

//'mongodb://127.0.0.1:27017/<DBの場所をここで指定できるので、以下の場合movieAppというディレクトリに保存される>>
mongoose.connect('mongodb://127.0.0.1:27017/authDemo',
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        // useCreateIndex: true
    })
    .then(() => {
        console.log("コネクション成功！！");
    })
    .catch(err => {
        console.log(err);
        console.log("MongoDBコネクションエラー");
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
const conf = {
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
};
app.use(session(conf));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id){
        return res.redirect('/login');
    }
    next();
};



app.get('/', (req, res) => {
    res.send('ホームページ');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    // const user = await User.findOne({ username });
    // const validPassword = await bcrypt.compare(password, user.password);
    console.log(foundUser);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
});

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/login');
});

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
});

app.get('/topsecret', requireLogin, (req, res) =>{
    res.send('TOPsecret');
})

app.listen(3000, () => {
    console.log('Port3000で待機中');
});