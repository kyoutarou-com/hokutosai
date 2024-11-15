# 第16回 高専祭 -北斗祭-

![ロゴ](./dist/assets/img/hokutosai-logo.png)

このリポジトリは、第16回高専祭-北斗祭-のホームページのソースコードを管理するためのものです。ホームページでは、北斗祭に関する情報やタイムテーブル、展示・模擬店情報などを掲載しています。

## 技術スタック

[![技術スタック](https://skillicons.dev/icons?i=html,css,js,npm,webpack,python)](https://skillicons.dev)

## 特徴

北斗祭に関する情報を提供し、来場者がスムーズにイベントを楽しめるように設計されています。ホームページはレスポンシブデザインを採用し、PCやスマートフォンからも快適にアクセスできます。

## 機能一覧

<div align="center">
    <img src="./dist/assets/img/screen.png" alt="">
</div>

## インストールとセットアップ

```bash
git clone https://github.com/kyoutarou-com/hokutosai.git
npm ci
```

## ツリー構造

.
├── dist・・・本番環境にデプロイするディレクトリ
│   └── assets・・・ビルド結果の出力先
│       ├── config・・・イベントや店舗情報の入力データをビルドした結果の出力先
│       ├── css・・・CSS
│       │   └── vendor・・・外部ライブラリ
│       ├── img・・・画像ファイル
│       │   ├── ad・・・広告画像
│       │   ├── campus-map・・・構内地図
│       │   ├── exhibition・・・展示アイコン画像
│       │   ├── favicon・・・ファビコン
│       │   ├── location・・・展示場所の画像
│       │   ├── map・・・模擬店の場所の画像
│       │   ├── stage・・・ステージ企画の画像
│       │   ├── stall・・・模擬店アイコン画像
│       │   └── vote・・・投票アイコンの画像
│       └── js・・・JavaScript
│           └── vendor・・・外部ライブラリ
├── qr-code・・・現在地探索ページのQRコード
├── scripts・・・コマンド置き場
└── src・・・ソースコード
    └── assets
        ├── config・・・イベントや店舗情報の入力データ
        ├── css・・・CSS
        └── js ・・・ JavaScript
            └── module ・・・ユーティリティー関数

## ブランチ

| ブランチ名      | 説明                   |
| --------------- | ---------------------- |
| Early-access    | 先行公開用ブランチ     |
| develop         | 開発用ブランチ         |
| feature-enquete | 投票機能実装用ブランチ |
| main            | 本番環境用ブランチ     |

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

[hokutosai-back-end](https://github.com/mako0523/hokutosai-back-end.git)
投票APIを提供するバックエンド

[hokutosai-manager]( https://github.com/mako0523/hokutosai-manager.git)
投票結果を閲覧するための管理者ページ
