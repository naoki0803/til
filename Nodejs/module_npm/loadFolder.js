const shelter = require("./shelter"); // ./shelterフォルダ内の猫ちゃん情報を読み込んでいる
const artster = require("./artster"); // ./artsterフォルダ内のfigletの上平をよみこんでいる


//shelterフォルダでmodule.exportsされているallcatsの配列&オブジェクトの情報を取得する為に、
//[0].name をつけている。(呼び出し結果は"tama"になる
console.log(shelter[0].name);

//artsterフォルダでmodule.exportsしているdoFiglet関数を実行している。
console.log(artster.doFiglet("HelloWold"));