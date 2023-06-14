console.log("argsからこんにちは")
console.log(process.argv)

//process.argvは以下配列を返してくれる

// 1つめの引数:node コマンドの絶対パス
// 2つめの引数:実行したファイルの絶対パス
// 3つめの引数:コマンドから渡した引数が返される

//ターミナルから実行した結果⇩

// # shiratorinaoki @ MacBook-Air in ~/projects/Javascript/nodejs [5:45:23]
// $ node args.js aaa bbb ccc
// argsからこんにちは
// [
//   '/usr/local/Cellar/node@14/14.20.1/bin/node',
//   '/Users/shiratorinaoki/projects/Javascript/nodejs/args.js',
//   'aaa',
//   'bbb',
//   'ccc'
// ]