## 起動方法

---

jsファイルにMongooseへのconnectionを記述して、そのjsファイルを実行する

1. jsファイルにmongooseをrequire()する
    
    ```jsx
    const mongoose = require("mongoose");
    ```
    
2. jsファイルに以下記述する
    
    <aside>
    💡 バージョン@5での記述
    https://mongoosejs.com/docs/5.x/docs/index.html
    
    mongoose.connect()を実行すると、promiseがretrunされるので、.then()を繋げて記載する事ができる。
    
    ```jsx
    
    //'mongodb://127.0.0.1:27017/<DBの場所をここで指定できるので、以下の場合movieAppというディレクトリに保存される(初回の記述などに、該当のDBディレクトリが存在しなくても問題ない)
    mongoose.connect('mongodb://127.0.0.1:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("コネクション成功！！");
    })
    .catch (err => {
        console.log("コネクションエラー");
    });
    ```
    
    </aside>
    

## Modelの作成方法

---

1. スキーマを記述する
    
    <aside>
    💡 省略記法
    
    ```jsx
    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    })
    ```
    
    </aside>
    
    <aside>
    💡 詳細記法
    
    詳細に記述することで、requiredなどのオプションも記述する事ができる
    
    ```jsx
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true //指定されたKey(今回だと<name:>がオブジェクトに存在してないといけない。必須項目)
        },
        price: {
            type: Number,
            required: true
        }
    });
    ```
    
    </aside>
    
2. mongoose.modelでモデルを作成する
    
    ```
    //モデルの作成
    const Movie = mongoose.model("Movie", movieSchema); //モデル名は単数系で先頭を大文字にする。第二引数にはスキーマを渡す
    ```
    

## Mongoose のCRUD

---

### insert

<aside>
💡 単一レコードをinsertする方法

```jsx
const titanic = new Movie({title: "タイタニック", year: 1986, score: 9.2, rating: "R"});
// new を実行する事でインスタンス化されるので、js内ではtitanicの中身を確認可能だが、mongoDBにはまだ保存されていない

db.movies.find()
//titanicの結果は返ってこない

titanic.save();
//.save()を実行する事で、dbに保存される

db.movies.find()
//{ "_id" : ObjectId("6491aacebf5ff11cd78f2043"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
```

</aside>

<aside>
💡 複数レコードをinsertする方法
insertManyをする事で、.save()も自動的に実行される

また、実行には時間がかかる為、promiseの結果を.thenや.cacthで記述する事が可能。

```jsx
Movie.insertMany([
    {title: "Amelie", year: 2001, score: 8.3, rating: "R"},
    {title: "Alien", year: 1979, score: 8.1, rating: "R"},
    {title: "The Iron Gian", year: 1999, score: 7.5, rating: "PG"},
    {title: "Stad By Me", year: 1986, score: 8.6, rating: "R"},
    {title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13"}
]).then(data => {
    console.log("成功")
})
```

</aside>

## find

<aside>
💡 mongodbのfind()と概ね利用方法は同じで、検索条件を引数の中に記述する事が可能
また、findした結果はpromiseとして返ってくるので、.thenで記述を続ける事ができる
※実際はプロミスと同じ挙動をさせる場合.findOne.exec())と続けて.exec()を呼ぶ必要がある

前提としてmongodbに以下データがある状態

> db.movies.find()
{ "_id" : ObjectId("6491aacebf5ff11cd78f2043"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298702"), "title" : "Amelie", "year" : 2001, "score" : 8.3, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298703"), "title" : "Alien", "year" : 1979, "score" : 8.1, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298704"), "title" : "The Iron Gian", "year" : 1999, "score" : 7.5, "rating" : "PG", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298705"), "title" : "Stad By Me", "year" : 1986, "score" : 8.6, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298706"), "title" : "Moonrise Kingdom", "year" : 2012, "score" : 7.3, "rating" : "PG-13", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
> 

### 全データを取得

```sql
Movie.find().then(data => console.log(data));

{ "_id" : ObjectId("6491aacebf5ff11cd78f2043"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298702"), "title" : "Amelie", "year" : 2001, "score" : 8.3, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298703"), "title" : "Alien", "year" : 1979, "score" : 8.1, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298704"), "title" : "The Iron Gian", "year" : 1999, "score" : 7.5, "rating" : "PG", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298705"), "title" : "Stad By Me", "year" : 1986, "score" : 8.6, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298706"), "title" : "Moonrise Kingdom", "year" : 2012, "score" : 7.3, "rating" : "PG-13", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
```

### findの引数で条件を指定

```sql
//titleがタイタニックのドキュメント
Movie.find({title: "タイタニック"}).then(data => console.log(data));
{ "_id" : ObjectId("6491aacebf5ff11cd78f2043"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }

//yearが2000より多いもの
Movie.find({year: {$gt: 2000}}).then(data => console.log(data));   
{ "_id" : ObjectId("6491ab0b4930f11d05298702"), "title" : "Amelie", "year" : 2001, "score" : 8.3, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298706"), "title" : "Moonrise Kingdom", "year" : 2012, "score" : 7.3, "rating" : "PG-13", "__v" : 0 }

```

### findById

```sql
//findByIdを使わなくても、_idを指定してfind()を実行することもできる
Movie.find({_id: "6491ab0b4930f11d05298705"}).then(data => console.log(data));
{ "_id" : ObjectId("6491ab0b4930f11d05298705"), "title" : "Stad By Me", "year" : 1986, "score" : 8.6, "rating" : "R", "__v" : 0 }

//findByIdの場合find()の引数に、{key: Value}で記述せず、直接valueを記述する　

Movie.findById("6491ab0b4930f11d05298705").then(data => console.log(data));
{ "_id" : ObjectId("6491ab0b4930f11d05298705"), "title" : "Stad By Me", "year" : 1986, "score" : 8.6, "rating" : "R", "__v" : 0 }

```

</aside>

## update

<aside>
💡 第一引数：アップデート対象を特定するクエリを記述
第二引数：更新したいオブジェクトを記述する
※mongoでは$setをkeyに指定する必要があったが、mongooseは直感的に記述ができる

### 単一ドキュメントの更新　　Model.updateOne()

```jsx
//更新前の状態を確認
> db.movies.find({title: "Alien"})
{ "_id" : ObjectId("6491ab0b4930f11d05298703"), "title" : "Alien", "year" : 1979, "score" : 8.1, "rating" : "R", "__v" : 0 }

//yearを1979 → 1984に変更する
> Movie.updateOne({title: "Alien"}, {year: 1984}).then(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 4258,
  [Symbol(trigger_async_id_symbol)]: 4256,
  [Symbol(destroyed)]: { destroyed: false }
}
> { n: 1, nModified: 1, ok: 1 }　　　//結果として返ってくるのは、変更した値ではないが、dbを直接確認すると値が更新されていることが確認可能

> db.movies.find({title: "Alien"})
{ "_id" : ObjectId("6491ab0b4930f11d05298703"), "title" : "Alien", "year" : 1984, "score" : 8.1, "rating" : "R", "__v" : 0 }
```

### 複数ドキュメントの更新　Model.updateMany()

```jsx
//更新前の状態を確認    ※$inを利用して指定した配列のtitleの映画を検索
> db.movies.find({title: {$in: ["The Iron Gian", "Moonrise Kingdom"]}})
{ "_id" : ObjectId("6491ab0b4930f11d05298704"), "title" : "The Iron Gian", "year" : 1999, "score" : 7.5, "rating" : "PG", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298706"), "title" : "Moonrise Kingdom", "year" : 2012, "score" : 7.3, "rating" : "PG-13", "__v" : 0 }

//scoreを10に変更する
> Movie.updateMany({title: {$in: ["The Iron Gian", "Moonrise Kingdom"]}}, {score: 10}).then(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 5164,
  [Symbol(trigger_async_id_symbol)]: 5162,
  [Symbol(destroyed)]: { destroyed: false }
}
> { n: 2, nModified: 2, ok: 1 }

> db.movies.find({title: {$in: ["The Iron Gian", "Moonrise Kingdom"]}})
{ "_id" : ObjectId("6491ab0b4930f11d05298704"), "title" : "The Iron Gian", "year" : 1999, "score" : 10, "rating" : "PG", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298706"), "title" : "Moonrise Kingdom", "year" : 2012, "score" : 10, "rating" : "PG-13", "__v" : 0 }
```

### 更新結果と同時に更新後のドキュメントを返す更新方法 findOneAndUpdate({検索条件},{変更内容},{オプション})

<aside>
💡 第三引数にオプションの`{new: true}`を追加する事で、返り値を更新後のドキュメントを返せる
オプションを指定しない場合は、変更前の情報を返す事ができる

</aside>

```jsx
> Movie.findOneAndUpdate({title: "The Iron Gian"}, {title: "The Iron Giant"}, {new: true}).then(res => console.log(res))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 7402,
  [Symbol(trigger_async_id_symbol)]: 7400,
  [Symbol(destroyed)]: { destroyed: false }
}
> (node:7877) DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/5.x/docs/deprecations.html#findandmodify
(Use `node --trace-deprecation ...` to show where the warning was created)
{
  _id: 6491ab0b4930f11d05298704,
  title: 'The Iron Giant',
  year: 1999,
  score: 10,
  rating: 'PG',
  __v: 0
}
```

</aside>

## delete

<aside>
💡

### 単一ドキュメントの削除　　model.deleteOne({削除対象})  ※最初に一致したドキュメントを削除する

```jsx
> db.movies.find({title: "タイタニック"})
{ "_id" : ObjectId("6491aacebf5ff11cd78f2043"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }

> Movie.deleteOne({title: "タイタニック"}).then(m => console.log(m))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 8190,
  [Symbol(trigger_async_id_symbol)]: 8188,
  [Symbol(destroyed)]: { destroyed: false }
}
> { n: 1, ok: 1, deletedCount: 1 }

> db.movies.find({title: "タイタニック"})
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
```

### 複数ドキュメントの削除　　model.deleteMany({削除対象})

```jsx
> db.movies.find({year: {$gt: 2000}})
{ "_id" : ObjectId("6491ab0b4930f11d05298702"), "title" : "Amelie", "year" : 2001, "score" : 8.3, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298706"), "title" : "Moonrise Kingdom", "year" : 2012, "score" : 10, "rating" : "PG-13", "__v" : 0 }

> Movie.deleteMany({year: {$gt: 2000}}).then(m => console.log(m))  //2000年以降のものを削除
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 8578,
  [Symbol(trigger_async_id_symbol)]: 8576,
  [Symbol(destroyed)]: { destroyed: false }
}
> { n: 2, ok: 1, deletedCount: 2 }

> db.movies.find()
{ "_id" : ObjectId("6491ab0b4930f11d05298703"), "title" : "Alien", "year" : 1984, "score" : 8.1, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298704"), "title" : "The Iron Giant", "year" : 1999, "score" : 10, "rating" : "PG", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298705"), "title" : "Stad By Me", "year" : 1986, "score" : 8.6, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }
```

### 削除と同時に削除したドキュメントを返す方法 　　findOneAndDelete({検索条件}　/ findManyAndDelete({検索条件}

```jsx
> db.movies.find()
{ "_id" : ObjectId("6491ab0b4930f11d05298703"), "title" : "Alien", "year" : 1984, "score" : 8.1, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298704"), "title" : "The Iron Giant", "year" : 1999, "score" : 10, "rating" : "PG", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298705"), "title" : "Stad By Me", "year" : 1986, "score" : 8.6, "rating" : "R", "__v" : 0 }
{ "_id" : ObjectId("6491ab0b4930f11d05298701"), "title" : "タイタニック", "year" : 1986, "score" : 9.2, "rating" : "R", "__v" : 0 }

> Movie.findOneAndDelete({year: 1986}).then(m => console.log(m))
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 8899,
  [Symbol(trigger_async_id_symbol)]: 8897,
  [Symbol(destroyed)]: { destroyed: false }
}
> {
  _id: 6491ab0b4930f11d05298705,
  title: 'Stad By Me',
  year: 1986,
  score: 8.6,
  rating: 'R',
  __v: 0
}
```

</aside>