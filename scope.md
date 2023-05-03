# スコープ

---

## 関数のスコープ

<aside>
💡 ・関数`内`で定義した変数は、関数の外から呼び出しはできない

```jsx
function birdwatch() {
		let bird = "ムクドリ";
		console.log(bird);// ムクドリ
}

bird; // NOT DEFINED
```

</aside>

<aside>
💡 ・関数`内外`同一名の変数を定義した場合、関数内では直近で定義した、関数内の変数を呼び出す

```jsx
let bird = "ハチドリ";

function birdwatch() {
		let bird = "ムクドリ";
		console.log(bird);// ムクドリ
}

bird; // ハチドリ 
```

</aside>

## ブロックスコープ

<aside>
💡 ブロックとは

関数以外の{}内のこと

```jsx
let num = 1;
if (num === 1) {console.log("1です");}
```

</aside>

<aside>
💡 ブロックのスコープは、ブロックないでしか参照できない

```jsx
let radius = 8;
if (radius > 0) {
		const PI = 3.14;
		let circ = 2 * PI * radius;
}

console.log("radius"); // 8
console.log("PI"); // NOT DEFINED
console.log("circ"); // NOT DEFINED
```

</aside>
