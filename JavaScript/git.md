# git


学習アウトプット用のTILリポジトリに、
Terminalからpushした際にエラーが出ていましたが、 無事解決できました！！ 

[Error]
Permission denied (publickey)

[実施内容]
・ssh接続の設定
・.ssh/configの修正

※参考にしたサイト
https://blog.cloud-acct.com/posts/u-github-ssh/



学んだ事追記

・公開鍵を任意のkey名にした際、設定ファイルの作成編集
※IdentityFileの内容を任意のkey名にする
vim ~/.ssh/config

・設定一覧確認
git config --list

・ステージング環境追加
git add <ファイル名>

・commit
git commit -m "<コミット内容>"

・push
git push origin main
