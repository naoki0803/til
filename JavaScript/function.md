

# Function

## 通常の記述
```
function <変数名>(){
	return 実行するコードを記述する
}
```

## 関数式
関数を定義する際に、変数に代入する事で、関数の記述を簡素化する事ができる
通常の記述で記載していた<変数名>の部分が省略されている。
※実際に関数を呼び出す際は、変数名()で呼び出す事ができる。
(関数式ではない場合の呼び出しは関数名()で呼び出している)
```
let sample = function(){
	return 実行するコードを記述する	
}
```

## アロー関数
関数式をさらに省略した記述で、関数式からさらに、function部分が省略される。
```
let arrow = (パラメーター) => {
        return 実行するコードを記述する
}
```

### アロー関数の省略①
パラメーターが1つの場合、()を省略する事ができる。
※パラメーターが0　or　2個以上の場合も省略不可
```
let arrow = パラメーター => {
	return 実行するコードを記述する;
}
```

### アロー関数の省略②　暗黙的なリターン
{}を省略して、（）で囲った場合、return に関しては暗黙的にreturnされる。
また、実行するコードが1行の場合は、アロー関数自体を1行で表現する事ができる。
※セミコロンの位置は()の後につける
```
let arrow = パラメーター => (実行するコードを記述する);
```


## オブジェクト内でメソッドとして記述
### 省略しない記述
```
let sample {
	name: naoki,
	method: function method(){
		メソッドで実行するコードを記述
	}
	
}
```

### 省略記述
```
let sample {
	name: naoki,
	method() {
		メソッドで実行するコードを記述
	}	
}
```

## 高階関数

高階関数は：
・引数として関数を受け取る
・戻り値に関数を指定する

### 引数として関数を受け取る
```
// サイコロの目をrollDie関数として定義
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

//高階関数として、callTwiceを定義 (低階にはrollDieが位置付)
function callTwice(func) {
  func();
  func();
}

//高階関数として、callTenRimesを定義　(低階にはrollDieが位置付)
function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

// 高階関数の実行
allTwice(rollDie);
callTenTimes(rollDie);
```

