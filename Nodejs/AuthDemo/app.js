const express = require('express');
const app = express();
const User = require('./models/user')
const mongoose = require('mongoose');

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

app.use(express.urlencoded({extended: true}));

app.get('/register', (req, res) => {
    res.render('register');
})
app.post('/register', async (req, res) => {
    res.send(req.body);
})

app.get('/', (req, res) => {
    res.send('ここはログイン時のみ閲覧できる秘密のページです')
})
app.listen(3000, () => {
    console.log('Port3000で待機中');
});