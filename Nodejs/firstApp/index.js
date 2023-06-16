const express = require("express");

const app = express();

//ーーーーーこの記述をする事で、サーバーを起動させることができる  ここからーーーーーー
app.listen(3000, () => {
    console.log("リクエストをポート3000で待受中...");
});
//ーーーーーこの記述をする事で、サーバーを起動させることができる  ここまでーーーーーー



//app.useは全てのリクエストに対して回答をする為、個別のURLをしているする場合、他で定義しているapp.getが動かなくなる
// app.use((req, res) => {
// 	console.log("リクエストを受付ました！！");
// 	res.send("リクエストを受付たので、レスポンスを返します。");
// });


//ーーーーーapp.getを記述する事で、getリクエストが送られる  ここからーーーーーー
app.get("/", (req, res) => {
    console.log("/にリクエストがありました。");
    res.send("/ここはホームページです...か？？？");
});

app.get("/r/:subreddit", (req, res) => {  ///:値(:subreddit)を指定るすると、動的にリクエストを取得できる
    const { subreddit } = req.params;     //req.paramsを実行する事で、sabreddit(urlで指定した値)を取得できる
    res.send(`${subreddit}のページです`);
});

app.get("/r/:subreddit/:postId", (req, res) => {  ///「:値」を続けて記載することも可能
    const { subreddit, postId } = req.params;
    res.send(`<h1>${subreddit}</h1><h2>${postId}</h2>のページです`);
});

app.get("/cats", (req, res) => {
    console.log("/catsにリクエストがありました。");
    res.send("/catsにリクエストがありました。");
});

app.get("/dogs", (req, res) => {
    console.log("/dogsにリクエストがありました。");
    res.send("/dogsにリクエストがありました。");
});

    //クエリストリングの記述方法 ここからーーーーー
    app.get("/search", (req, res) => {
        // res.send(`Hi!!!!`);
        console.log(req.query);     //ここでqueryメソッドを利用している
        const { q, color } = req.query;        //ここでqueryメソッドを利用している
        res.send(`qの値は${q}で、colorの値は${color}です`)   //ここでqueryメソッドを利用している
    });
    //クエリストリングの記述方法 ここまでーーーーー


    //*で指定するルーティングは、各種getリクエストの最後に記載する(上から読み込む為) ここからーーーーーー
    app.get("*", (req, res) => {  //明示的に指定したもの以外全てのリクエストを受けつける
        res.send("正しいURLを指定してください。");
    });
    //*で指定するルーティングは、各種getリクエストの最後に記載する(上から読み込む為) ここまでーーーーーー

//ーーーーーapp.getを記述する事で、getリクエストが送られる  ここまでーーーーーー



//ーーーーーapp.postを記述する事で、postリクエストが送られる  ここからーーーーーー
app.post("/", (req, res) => {
    console.log("/にpostリクエストがありました。");
    res.send("/ホームページにpostリクエストがありました");
});
//ーーーーーapp.postを記述する事で、postリクエストが送られる  ここまでーーーーーー
