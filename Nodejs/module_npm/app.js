// const math = require("./math");  // ./をつけて相対パスにしないと、別のモジュールを参照しようとしてしまう
// console.log(math.square(3));
// console.log(math.add(3,3));


const {square, add} = require("./math");  // 分割代入して必要な要素のみ取得も可能
console.log(square(9));
console.log(add(9,5));