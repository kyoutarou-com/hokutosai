# 第 16 回 高専祭 -北斗祭-

![ロゴ](./dist/assets/img/hokutosai-logo.png)

このリポジトリは、第 16 回高専祭-北斗祭-のホームページのソースコードを管理するためのものです。ホームページでは、北斗祭に関する情報やタイムテーブル、展示・模擬店情報などを掲載しています。

## 特徴

北斗祭に関する情報を提供し、来場者がスムーズにイベントを楽しめるように設計されています。ホームページはレスポンシブデザインを採用し、PC やスマートフォンからも快適にアクセスできます。

## 技術スタック

[![技術スタック](https://skillicons.dev/icons?i=html,css,js,npm,webpack,python)](https://skillicons.dev)

**フロントエンド**

-   HTML
-   CSS
-   JavaScript(jQuery)
-   NPM
-   webpack

**バックエンド**

-   JavaScript(Express)
-   Node.js
-   Google Apps Script

**データベース**

-   MySQL

**その他**

-   Python

## ページ一覧

| ファイル名            | ページ名               |
| --------------------- | ---------------------- |
| index.html            | トップページ           |
| about.html            | 北斗祭概要             |
| theme.html            | テーマ                 |
| greeting.html         | 挨拶                   |
| news.html             | ニュース               |
| committee.html        | 北斗祭実行委員会紹介   |
| time-table.html       | タイムテーブル         |
| stage.html            | 企画紹介               |
| stall.html            | 模擬店紹介             |
| exhibition.html       | 展示紹介               |
| vote.html             | 投票                   |
| please.html           | 来場者の方へのご案内   |
| campus-map.html       | キャンパスマップ       |
| access.html           | アクセス情報           |
| question.html         | よくある質問           |
| recruit-sponsors.html | 協賛のお願い           |
| sponsors.html         | 協賛企業様一覧         |
| special-thanks.html   | スペシャルサンクス一覧 |
| inquiry.html          | お問い合わせページ     |
| form.html             | お問い合わせフォーム   |
| site-map.html         | サイトマップ           |

<div align="center">
    <img src="./dist/assets/img/screen.png" alt="">
</div>

## インストールとセットアップ

```bash
git clone https://github.com/kyoutarou-com/hokutosai.git
npm ci
```

## ツリー構造

.</br>
├── dist・・・本番環境にデプロイするディレクトリ</br>
│ └── assets・・・ビルド結果の出力先</br>
│ ├── config・・・イベントや店舗情報の入力データをビルドした結果の出力先</br>
│ ├── css・・・CSS</br>
│ │ └── vendor・・・外部ライブラリ</br>
│ ├── img・・・画像ファイル</br>
│ │ ├── ad・・・広告画像</br>
│ │ ├── campus-map・・・構内地図</br>
│ │ ├── exhibition・・・展示アイコン画像</br>
│ │ ├── favicon・・・ファビコン</br>
│ │ ├── location・・・展示場所の画像</br>
│ │ ├── map・・・模擬店の場所の画像</br>
│ │ ├── stage・・・ステージ企画の画像</br>
│ │ ├── stall・・・模擬店アイコン画像</br>
│ │ └── vote・・・投票アイコンの画像</br>
│ └── js・・・JavaScript</br>
│ └── vendor・・・外部ライブラリ</br>
├── qr-code・・・現在地探索ページの QR コード</br>
├── scripts・・・コマンド置き場</br>
└── src・・・ソースコード</br>
└── assets</br>
├── config・・・イベントや店舗情報の入力データ</br>
├── css・・・CSS</br>
└── js ・・・ JavaScript</br>
└── module ・・・ユーティリティー関数</br>

## ブランチ

| ブランチ名      | 説明               |
| --------------- | ------------------ |
| Early-access    | 先行公開用ブランチ |
| develop         | 開発用ブランチ     |
| feature-enquete | 投票機能用ブランチ |
| main            | 本番環境用ブランチ |

`develop`ブランチを元に`feature-新しい機能名`という名前でブランチを作成し、作業を行います。バグが無いことを確認後、`develop`ブランチ、`main`ブランチにマージします。

## コマンド一覧

| コマンド                   | 実行される処理                                           |
| -------------------------- | -------------------------------------------------------- |
| npm run build              | 本番環境用のビルド                                       |
| npm run csv-to-json        | 入力したイベント・店舗情報をコードで使用できる形式に変換 |
| npm run clean-development  | 開発環境にデプロイしたファイルを削除                     |
| npm run clean-production   | 本番環境にデプロイしたファイルを削除                     |
| npm run deploy-development | 開発環境にデプロイ                                       |
| npm run deploy-production  | 本番環境にデプロイ                                       |

## その他のリポジトリ

<<<<<<< HEAD
[hokutosai-back-end](https://github.com/mako0523/hokutosai-back-end.git)</br>
投票 API を提供するバックエンド

# [hokutosai-manager](https://github.com/mako0523/hokutosai-manager.git)</br>

[hokutosai-back-end](https://github.com/mako0523/hokutosai-back-end.git)
投票 API を提供するバックエンド

[hokutosai-manager](https://github.com/mako0523/hokutosai-manager.git)

> > > > > > > 512186943b74861579ee42199c93c036f725f124
> > > > > > > 投票結果を閲覧するための管理者ページ
