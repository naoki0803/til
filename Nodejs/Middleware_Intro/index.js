const express = require("express"); //要npm i ejs
const app = express();
const morgan = require("morgan")

// app.use(morgan("tiny"));

//next() に関しての挙動確認
    // app.use((req, res, next) => {
    //     console.log(req.method, req.path);
    //     console.log("1個目のミドルウェア");
    //     next();
    //     // console.log("1個目のミドルウェアの後の処理");
    // });

    // app.use((req, res, next) => {
    //     console.log("2個目のミドルウェア");
    //     next();
    //     // console.log("2個目のミドルウェアの後の処理");
    // });

    // app.use((req, res, next) => {
    //     console.log("3個目のミドルウェア");
    //     next();
    //     // console.log("3個目のミドルウェアの後の処理");
    // });




//app.useについて
//特定のパスにミドルウェアの関数を指定する(パスを)指定しない場合は全てのリクエストで実行される
//指定方法は公式リファレンス

//  /dogsにリクエストがあった時だけいぬが返される
// app.use("/dogs", (req, res, next) => {  //第一引数に</auth*>などを指定することで、authから始まる全てのリクエストにミドルウェアを実行できる
//     console.log("いぬ");
//     next();
// });


//req.queryの値が"supersecret"の場合のみ、表示させる
///secret/hoge/mogeといったpathにも適用されるしまう課題がある。対策は次項に記載
    app.use("/secret", (req, res, next) => {
        const { password: password } = req.query;
        console.log(password);
        
        if (password === "supersecret") {
            return next();
        }
        res.send("passwordが必要です")
    });

// 上記コードを関数に入れて、app.getの/secretのルーティングを記述しているメソッドの、第二引数に関数を入れる。

const verifyPassword = (req, res, next) => {
    const { password: password } = req.query;
    console.log(password);
    
    if (password === "supersecret") {
        return next();
    }
    res.send("passwordが必要です")
};


app.get("/secret", verifyPassword, (req, res) => {   //第二引数に<verifyPassword>を定義することで、/secretルーティングのみミドルウェアが実行される
    res.send("ここは秘密のページです、内緒にしてね");
})

app.get("/", (req, res) => {
    // res.render("home")
    res.send("HOME!!");
});


app.get("/dogs", (req, res) => {
    // res.render("home")
    res.send("わんわん");
});

app.use((req, res) => {  //第一引数を指定しない & すべてのルーティングの最下部に記載することで、記述したルーティングに含まれないリクエストに任意の処理をする事ができる
    res.status(404).send("ページが見つかりません")  //status(404)を指定しないと、ステータスコードが200になってしまう
});


//サーバ接続
app.listen(3000, () => {

    console.log("サーバーをPort3000で受付中");
})
