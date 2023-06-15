const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

// それぞれの要素を一つづつmodule.exportsに入れる
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;


//そもそもmodule.exportsはexportsという変数に代入されているので、moduleは省略してもOK
exports.add = add;
exports.PI = PI;
exports.square = square;


//module.exportsのオブジェクトに、そのまま代入してもOK
module.exports = {
    add: add,
    PI: PI,
    square: square
};