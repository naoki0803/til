const figlet = require("figlet");
const colors = require("colors"); //なくてもいけるけど、モジュールを理解する為にclorsモジュールもnmpからインストールしている





//引数dataに入れた文字列をfiglet化する関数を定義。
const doFiglet = (data) => {
  figlet(data, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow); //.rainbowはnpmでインストールしたcolorsモジュールを利用している
  });
  
}

// doFigletをexports
module.exports.doFiglet = doFiglet;