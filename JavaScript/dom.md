# DOM

## document.getElementById("ID名")
### document.getElementByIdとは
id情報を元に、情報を取得する
※引数の指定時は""で囲い、stringsとして指定する

```JavaScript
let byId ＝ document.getElementById("test");
```


## document.getElementｓByTag("タグ名"　or "class名")
### document.getElementｓByTag / document.getElementｓByClassとは
HTMLのタグ(h1やpやaなど)や、classを元に一致する全ての上ほゆを取得できる。
※引数の指定時は""で囲い、stringsとして指定する

取得した要素は「HTML collection」と言う配列のような物に書く方され、情報を取得する際は、配列と同じように、配列名[index値]で個別の情報を取得可能


```JavaScript
let byclass ＝ document.getElementById("test");
```



## document.querySelector("CSSセレクターで要素を指定")
### document.querySelector　/ 
HTMLのタグ(h1やpやaなど)や、classを元に一致する全ての上ほゆを取得できる。

取得した要素は「HTML collection」と言う配列のような物に書く方され、情報を取得する際は、配列と同じように、配列名[index値]で個別の情報を取得可能

※特段指定がなければ、対象DOM内から一番初めに一致した情報を返すようになっている。

```JavaScript
let queryClassAll ＝ document.querySelectorAll(".test");
//testクラスに一致する全ての要素を取得できる

let queryClass ＝ document.querySelector(".test");
//testクラスに一致する一番はじめの要素を取得できる


```

```javaScript
//HTML
<input type="checkbox" id="scales" name="scales" checked>

---

let queryType ＝ document.querySelector("＃scales[type=checkbox]");

// inputタグ内の、idがscalesかつ、チェックボックスの情報のみ取得できる！！！
// ポイントは[]内にでinputタグの、typeプロパティを指定できる事！！

```