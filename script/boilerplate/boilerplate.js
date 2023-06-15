//------------------------------
//  出来る事：「hetml、css、js」の3ファイルをコマンド一つで作成できる(3ファイルを書く方するdirも同時に作成する)
//  利用方法：ファイルを作成したいディレクトリ上で以下コマンドを実行する
//  コマンド：node /Users/shiratorinaoki/script/boilerplate/boilerplate.js <作成するDirName(オプション)>
//          ※boilerplate.jsが本ファイルで、絶対パスでファイルを指定して実行している。
//------------------------------

const fs = require("fs");
const dirName = process.argv[2] || "noNameProject"; //
const htmlTemplate = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <script src="app.js"></script>
</body>
</html>`

try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, htmlTemplate);
    fs.writeFileSync(`${dirName}/style.css`, "");
    fs.writeFileSync(`${dirName}/app.js`, ""); 
} catch(err) {
    console.log("エラーが発生しました");
    console.log(err);
}


