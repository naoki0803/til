const express  = require('express');
const app = express();
const session = require('express-session');

// ミドルウェアを利用する事で、req時にconnect.sid という Keyで
app.use(session({
    secret: 'mysecret'
}));

app.get('/viewcont', (req, res) => {
    if(req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    //ミドルウェアを利用した状態だと、cookieに｢connect.sid｣ という名前で値が登録される
    res.send(`あなたは${req.session.count}回このページを表示しました。`);
});

app.listen(3000, (req, res) => {
    console.log('PORT 3000 で待機中');
}); {}