# デフォルトパラメータ

---

### デフォルトパラメータとは

<aside>
💡 関数のパラメーターにデフォルト値を設定する事ができる

パラメーターの後に`= 値`で設定可能

</aside>

```jsx
// デフォルト値を6で設定している
function rollDie(numSides = 6){
	return Math.floor(Math.random() * numSides) + 1;
}
```

# スプレッド構文(関数呼び出し)

---

### 関数呼び出しにおけるスプレッド構文とは

<aside>
💡  配列を展開して、関数に渡す事ができる本文

</aside>

```ruby
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Math.max(nums) //NaN　　　Mathは配列を理解できないので、スプレッド構文で展開する必要がある
Math.max(...nums) //9
```

# スプレッド構文(配列呼び出し)

---

### 配列呼び出しにおけるスプレッド構文とは

<aside>
💡  既存の配列から、新しい配列を作成する事ができる
配列の要素を新しい配列に展開する事ができる

</aside>

```jsx
let nums = [1, 2, 3, 4]
let nums2 = [5, 6, 7, 8, 9]

[...nums, ...nums2, 10] //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# スプレッド構文(オブジェクト呼び出し)

---

### オブジェクト呼び出しにおけるスプレッド構文とは

<aside>
💡  既存の配列から、新しい配列を作成する事ができる
配列の要素を新しい配列に展開する事ができる

</aside>

```jsx
let cat = {name: "猫", family: "猫科", length: 3};
let dog = {name: "犬", family: "犬科"};

console.log({...cat, ...dog, num:10})
//{name: '犬', family: '犬科', length: 3, num: 10}
//同一のnameは後から実行されたオブジェクトに上書きされる。

console.log({...dog, ...cat, num:10})
//{name: '猫', family: '猫科', length: 3, num: 10}
```

# レスト構文

---

### レスト構文とは

<aside>
💡 パラメーターにレスト構文として指定した場合、指定したタイミングで残っている引数を全て展開できる
関数を定義する時点でレスト構文を指定する事で、なんかうまいこと合計してくれる。

レスト構文を定義する場所によって、のこリノ引数を展開も可能

</aside>

```jsx
function sum(nums){
	return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3));
//app copy 4.js:12 Uncaught TypeError: nums.reduce is not a function
 

function sum(...nums2){
	return nums2.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3));
//6
```

```jsx
const ranking = [
  "一郎",
  "二郎",
  "三郎",
  "四郎",
  "五郎",
  "六郎",
  ]
  
  function rank(gold, silver, bronze, ...ranking){
    console.log(`金　${gold}`)
    console.log(`銀　${silver}`)
    console.log(`銅　${bronze}`)
    console.log(`その他　${ranking}`)
  }

  rank(...ranking);

//金　一郎
//銀　二郎
//銅　三郎
//その他　四郎,五郎,六郎
```

# 分割代入(配列)

---

### 配列の分割代入とは

<aside>
💡 配列の要素を、別の変数に割り当てる事ができる

</aside>

```jsx
const scores = [100, 234, 78, 123, 2345, 784]

const highScore =  scores[4];
const secondScore =  scores[5];
//このように一つづつ変数に代入することもできるが、スマートではない。

const [gold, silver, ...rest] = scores
//...restはレスト構文をつかって残り引数は全てrestに代入している

console.log(rest)

//[78, 123, 2345, 784]
```

# 分割代入(オブジェクト)

---

### オブジェクトの分割代入とは

<aside>
💡 オブジェクトの要素を、別の変数に割り当てる事ができる

</aside>

```jsx
const user = {
  firstName: 'John', // ユーザーの名前
  lastName: ' Mayor', // ユーザーの名前
  age: 25, // ユーザーの年齢
  email: 'john@example.com', // ユーザーのメールアドレス
  address: {
    city: 'Tokyo', // ユーザーの住所の都市名
    country: 'Japan' // ユーザーの住所の国名
  },
  hobbies: ['reading', 'traveling', 'hiking'], // ユーザーの趣味の配列
  isAdmin: false // ユーザーが管理者かどうかの真偽値
};

const firstName = user.firstName
const age = user.age
const email = user.email
//このように一つづつ変数に代入することもできるが、スマートではない

const {firstName, age, email} = user;
//かなりスッキリと表現する事ができる
 
```

