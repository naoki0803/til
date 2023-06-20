## 起動方法

---

以下の手順に従ってMongoDBを起動します。

1. MongoDBのbinフォルダに移動します。
    
    ```jsx
    $ cd ~/webvebdc/
    ```
    
2. mongod (mongo demon)を実行する
    
    <aside>
    💡 mondodを実行する際、でデフォルトでは　/data/db で実行されるが、任意のディレクトににDBを指定した場合、
    `--dbpath`を用いてDBを保存するディレクトリを指定する必要がある。
    
    ```jsx
    ./mongodb/bin/mongod --dbpath ~/webvebdc/data/db
    ```
    
    </aside>
    
3. iterm2で「⌘+d」で別タブで開く
4. 新しいタブで、mongoコマンドを実行する　(PATHを通していれば、直接mongoのみで実行もできる)
    
    ```
    ./mongodb/bin/mongo
    ```
    

## 環境確認操作

---

### データベースの確認

```sql
show dbs
```

<aside>
💡 結果として、存在しているDBが帰ってくる
※デフォルトではanimalShelter以外の3つが作成されており、DBを追加すると行が追加される

> admin          0.000GB
animalShelter  0.000GB
config         0.000GB
local          0.000GB
> 
</aside>

### 利用するDBの設定

```sql
use <利用するDB名>

//利用するDB名に、show dbsで確認したDB名を入力する
```

### 利用しているDBの確認

```sql
db
//animalShelter
// useを実行していない場合、testというDBが設定されている
```

### collectionの確認

<aside>
💡 関連するドキュメントをグループ化するためのデータ構造

```sql
show collection
// cats
// dogs
```

</aside>

※コレクションはエクセルのテーブルみたいなもの

※ドキュメントがデータベース上の行（リスト）に該当する

## MongoDB のCRUD

---

### insert

<aside>
💡 引数の数に応じて、適宜記述方法を変える必要がある。
・引数が`単体`の場合：オブジェクト
・引数が`複数`の場合：配列内にオブジェクト

```sql
db.<colection名>.insert({name: "タマ", age: 6, dogFriendly: false}, {name: "チョコ", breed: "chihuahua", age: 17, catFriendly: true})
```

</aside>

## find

<aside>
💡 引数応じて、検索内容を変更できる
・引数が`無し`の場合：collection全て 
・引数が`有り`の場合：引数と完全一致するcollectionを返す`（引数は複数指定可能）`

```sql
db.<colection名>.find()
```

```sql
db.dogs.find()
//{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "ポチ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
//{ "_id" : ObjectId("6491041946655e8e9470710b"), "name" : "ハチ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ハチ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }

db.dogs.find({name: "ポチ"})
// { "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "ポチ", "age" : 3, "breed" : "corgi", "catFriendly" : true }

db.dogs.find({catFriendly : true}, {age : 17})
//{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }

```

</aside>

## update

<aside>
💡 第一引数：アップデート対象を特定するクエリを記述
第二引数：keyに$set:を指定して、valueに更新したいオブジェクトを記述する

```sql
//変更するドキュメントが一つの場合(複数の値を変更することも可能)
db.<colection名>.updateOne({key: " value"}, {$set: {{key: " value"} })

//変更するドキュメントが複数の場合
db.<colection名>.updateMany({key: " value"}, {$set: {{key: " value"} })
```

```sql
$set: {key: value}

$currentDate: {key: true}
//指定したkeyを現在の日時に更新ができる
```

</aside>

```sql
db.dogs.find()　　//デフォルトの状態
//{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "ポチ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
//{ "_id" : ObjectId("6491041946655e8e9470710b"), "name" : "ハチ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ハチ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }
　
db.dogs.updateOne({name: "ポチ"}, {$set: {name: "パトラッシュ"}})　　//updateOneで、単一レコートのポチをパトラッシュにupdate
db.dogs.find()　　//変更結果を確認
//{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "パトラッシュ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
//{ "_id" : ObjectId("6491041946655e8e9470710b"), "name" : "ハチ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ハチ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }

db.dogs.updateMany({name: "ハチ"}, {$set: {name: "ゴロウ"}})  　//updateManyで、複数単一レコードに合致するのハチをゴロウにupdate
//{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "パトラッシュ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
//{ "_id" : ObjectId("6491041946655e8e9470710b"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }
//{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }
```

## delete

<aside>
💡 第一引数：アップデート対象を特定するクエリを記述
第二引数：keyに$set:を指定して、valueに更新したいオブジェクトを記述する

```sql
//変更するドキュメントが一つの場合(複数の値を変更することも可能)
db.<colection名>.deleteOne({key: " value"})

//変更するドキュメントが複数の場合
db.<colection名>.deleteManny({key: " value"})

//全てのドキュメントを削除する場合
db.<colection名>.deleteMany({})
```

```sql
> db.dogs.find()
{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "パトラッシュ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
{ "_id" : ObjectId("6491041946655e8e9470710b"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }

> db.dogs.deleteOne({name: "ゴロウ"})
{ "acknowledged" : true, "deletedCount" : 1 }
> db.dogs.find()
{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "パトラッシュ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }

> db.dogs.insert({"name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false})
WriteResult({ "nInserted" : 1 })

> db.dogs.find()
{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "パトラッシュ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
{ "_id" : ObjectId("6491046d46655e8e9470710c"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }
{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }
{ "_id" : ObjectId("64913ca5fb0129bf18a270fd"), "name" : "ゴロウ", "breed" : "golden", "age" : 14, "catFriendly" : false }

> db.dogs.deleteMany({name: "ゴロウ"})
{ "acknowledged" : true, "deletedCount" : 2 }

> db.dogs.find()
{ "_id" : ObjectId("6491019146655e8e9470710a"), "name" : "パトラッシュ", "age" : 3, "breed" : "corgi", "catFriendly" : true }
{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }
```

</aside>

## MongoDB の演算子

---

### ネストされた値の取得

<aside>
💡  db.dogs.find({`"personality.childFriendly"`: true})

ネストされている場合`"”`で囲って、親子間に`.`を記述する

```sql
> db.dogs.find()
{ "_id" : ObjectId("6491046d46655e8e9470710d"), "name" : "チョコ", "breed" : "chihuahua", "age" : 17, "catFriendly" : true }
{ "_id" : ObjectId("64913ec5fb0129bf18a270fe"), "personality" : { "childFriendly" : true } }
{ "_id" : ObjectId("64913eeefb0129bf18a270ff"), "name" : "パトラッシュ", "personality" : { "childFriendly" : true } }

> db.dogs.find({"personality.childFriendly": true})
{ "_id" : ObjectId("64913ec5fb0129bf18a270fe"), "personality" : { "childFriendly" : true } }
{ "_id" : ObjectId("64913eeefb0129bf18a270ff"), "name" : "パトラッシュ", "personality" : { "childFriendly" : true } }

//{childFriendly: true}に一致するものだけが返される 

and条件で、条件を増やすこともできる
> db.dogs.find({"personality.childFriendly": true, name: "パトラッシュ"})
{ "_id" : ObjectId("64913eeefb0129bf18a270ff"), "name" : "パトラッシュ", "personality" : { "childFriendly" : true } }
//{childFriendly: true}かつ、nameがパトラッシュのもの　
```

</aside>

### 以上以下/より

<aside>
💡

[MongoDBチートシート - Qiita](https://qiita.com/morrr/items/8bcb5b0fc643267d6bcf)

| 演算子 | 意味 |
| --- | --- |
| $eq | == |
| $ne | != |
| $lt | < |
| $lte | <= |
| $gt | > |
| $gte | >= |
| $in | 配列に含まれる |
| $nin | 配列に含まれない |
| $or | or |
| $and | and |

</aside>
