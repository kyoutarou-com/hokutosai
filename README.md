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
├── dist ・・・<sapn style =></sapn>
│ └── assets
│ ├── config
│ ├── css
│ │ └── vendor
│ ├── img
│ │ ├── ad
│ │ ├── campus-map
│ │ ├── exhibition
│ │ ├── favicon
│ │ ├── location
│ │ ├── map
│ │ ├── stage
│ │ ├── stall
│ │ └── vote
│ └── js
│ └── vendor
├── hokutosai-manager
├── qr-code
├── scripts
└── src
└── assets
├── config
├── css
└── js
└── module

## 各ディレクトリの説明

| ディレクトリ名 | 説明                                 |
| -------------- | ------------------------------------ |
| ./dist         | 静的ファイル， ビルド結果の出力先    |
| ./dist         | 静的ファイル， ビルド結果の出力先    |
| scripts        | シェルスクリプトなどのコマンド置き場 |
| src            | ビルド前のファイル                   |

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

[hokutosai-back-end](https://github.com/mako0523/hokutosai-back-end.git)
投票 API を提供するバックエンド

[hokutosai-manager](https://github.com/mako0523/hokutosai-manager.git)
投票結果を閲覧するための管理者ページ
