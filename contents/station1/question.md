# Railway に取り組むための準備

この Railway は、各 Station のクリア判定をメンターとの面談により行います。（3 Station まとめて行うことが可能です。）
Railway 準備編内にある、「TechTrain へようこそ」の資料中の [メンターとの面談を活用しよう](https://docs.google.com/presentation/d/1o7pMnYO5hZSAdNwNG93iuMV7GxGFC9Y8OaHxTxctIQ8/edit#slide=id.g2cf696b2606_0_171) ページをよく読んでから面談に挑んでください。
ポイントとしては下記です。
1. 自分が書いたコードの説明をできるようにしておく。
2. その問題のことだけでなく、周辺知識の質問も準備しておく。
3. より深く理解するための学習方法を聞けるようにしておく。
もちろん他にもありますが上記のような準備をして面談に臨むと、クリア判定面談がより有意義な時間になると思いますので、
書いたコードの言語化と、気になることを質問する準備をしておきましょう。

# 問題

この Railway で使用するテンプレートリポジトリは、React などのライブラリが古いバージョンになっています。
ライブラリのバージョンアップをし、最新のものに更新しましょう。
また、バージョンアップした際にプログラムの記述法が変わったりして動かない部分がでてきますので、
エラーをよく読み、正しく実装していきましょう。

- APIのBase URL: qvg1o8w2ef.execute-api.ap-northeast-1.amazonaws.com
- APIドキュメント URL: https://app.swaggerhub.com/apis-docs/INFO_3/TODOApplication/1.0.0

# 確認テスト

1. [railway-todo-app](https://github.com/TechBowl-japan/railway-todo-app) を Fork し、Fork したリポジトリを Clone する。
2. Clone したフォルダを VSCode で開く。
3. VSCode のターミナルを開き、yarn install を実行する。
  - ローカルサーバを起動する際は yarn start を実行する。（切断する際は Ctrl + C）
4. ライブラリのバージョンアップを行う。（React、React-router）
  - API は Heroku で動作しています。一定時間アクセスがないと停止します。
  - 停止しているときにアクセスすると、サーバ起動中にリクエストがタイムアウトする場合があります。
  - その場合は再度リクエストを行ってください。
5. 面談準備と面談予約をする。
6. クリア判定面談を実施し、メンターから OK をもらう。
