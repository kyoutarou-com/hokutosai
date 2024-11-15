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

**概要**
| ファイル名     | ページ名             |
| -------------- | -------------------- |
| index.html     | トップページ         |
| about.html     | 北斗祭概要           |
| theme.html     | テーマ               |
| greeting.html  | 挨拶                 |
| news.html      | ニュース             |
| committee.html | 北斗祭実行委員会紹介 |

**企画**
| ファイル名                      | ページ名             |
| ------------------------------- | -------------------- |
| time-table.html                 | タイムテーブル       |
| stage.html                      | ステージ企画紹介     |
| stage-individual.html#{id}      | ステージ企画個別紹介 |
| stall.html                      | 模擬店紹介           |
| stall-individual.html#{id}      | 模擬店個別紹介       |
| exhibition.html                 | 展示紹介             |
| exhibition-individual.html#{id} | 展示個別紹介         |

**投票**
| ファイル名           | ページ名                  |
| -------------------- | ------------------------- |
| vote.html            | 投票一覧                  |
| vote-cosplay.html    | 仮装コンテスト投票        |
| vote-exhibition.html | 展示企画投票              |
| vote-karaoke.html    | カラオケ投票              |
| vote-muscle.html     | キン肉マンコンテスト投票  |
| vote-stall.html      | 模擬店企画投票            |
| vote-voice.html      | Nice Voice コンテスト投票 |
| vote-still.html      | 投票時間外                |
| vote-thanks.html     | 投票完了                  |

**来場案内**
| ファイル名                      | ページ名                     |
| ------------------------------- | ---------------------------- |
| ------------------------------- | ---------------------------- |
| please.html                     | 来場者の方へのご案内         |
| campus-map.html                 | キャンパスマップ             |
| access.html                     | アクセス情報                 |
| question.html                   | よくある質問                 |
| where.html                      | 現在地探索                   |
| lost-property.html              | 落とし物一覧                 |
| pamphlet.html                   | 公式パンフレット             |
| enquete.html                    | 来場者アンケート             |
| recruit-sponsors.html           | 協賛のお願い                 |
| sponsors.html                   | 協賛企業様一覧               |
| special-thanks.html             | スペシャルサンクス一覧       |

**常設 サイト関連**
| ファイル名          | ページ名                     |
| ------------------- | ---------------------------- |
| inquiry.html        | お問い合わせページ           |
| form.html           | お問い合わせフォーム         |
| sending             | お問い合わせフォーム送信完了 |
| site-map.html       | サイトマップ                 |
| site-policy.html    | サイトポリシー               |
| privacy-policy.html | プライバシーポリシー         |

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
├── dist&nbsp;&nbsp;・・・・・・・・・・・・・&nbsp;&nbsp;本番環境にデプロイするディレクトリ</br>
│ └── assets&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;ビルド結果の出力先</br>
│ ├── config&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;イベントや店舗情報の入力データをビルドした結果の出力先</br>
│ ├── css&nbsp;&nbsp;・・・・・・・・・・・・&nbsp;&nbsp;CSS</br>
│ │ └── vendor&nbsp;&nbsp;・・・・・・・・・・&nbsp;&nbsp;外部ライブラリ</br>
│ ├── img&nbsp;&nbsp;・・・・・・・・・・・・&nbsp;&nbsp;画像ファイル</br>
│ │ ├── ad&nbsp;&nbsp;・・・・・・・・・・・・&nbsp;&nbsp;広告画像</br>
│ │ ├── campus-map&nbsp;&nbsp;・・・・・・・&nbsp;&nbsp;構内地図</br>
│ │ ├── exhibition&nbsp;&nbsp;・・・・・・・・・&nbsp;&nbsp;展示アイコン画像</br>
│ │ ├── favicon&nbsp;&nbsp;・・・・・・・・・・&nbsp;&nbsp;ファビコン</br>
│ │ ├── location&nbsp;&nbsp;・・・・・・・・・・&nbsp;&nbsp;展示場所の画像</br>
│ │ ├── map&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;模擬店の場所の画像</br>
│ │ ├── stage&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;ステージ企画の画像</br>
│ │ ├── stall&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;模擬店アイコン画像</br>
│ │ └── vote&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;投票アイコンの画像</br>
│ └── js&nbsp;&nbsp;・・・・・・・・・・・・・&nbsp;&nbsp;JavaScript</br>
│ └── vendor&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;外部ライブラリ</br>
├── qr-code&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;現在地探索ページの QR コード</br>
├── scripts&nbsp;&nbsp;・・・・・・・・・・・・&nbsp;&nbsp;コマンド置き場</br>
└── src&nbsp;&nbsp;・・・・・・・・・・・・・&nbsp;&nbsp;ソースコード</br>
└── assets</br>
├── config&nbsp;&nbsp;・・・・・・・・・・・&nbsp;&nbsp;イベントや店舗情報の入力データ</br>
├── css&nbsp;&nbsp;・・・・・・・・・・・・&nbsp;&nbsp;CSS</span></br>
└── js&nbsp;&nbsp;・・・・・・・・・・・・・&nbsp;&nbsp;JavaScript</br>
└── module&nbsp;&nbsp;・・・・・・・・・・&nbsp;&nbsp;ユーティリティー関数</br>

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
