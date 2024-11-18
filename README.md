# 第 16 回 高専祭 -北斗祭- 特設 HP

![ロゴ](./dist/assets/img/hokutosai-logo.png)

このリポジトリは、第 16 回高専祭-北斗祭-のホームページのソースコードを管理するためのものです。ホームページでは、北斗祭に関する情報やタイムテーブル、展示・模擬店情報などを掲載しています。

## 特徴

北斗祭に関する情報を提供し、来場者がスムーズにイベントを楽しめるように設計されています。ホームページはレスポンシブデザインを採用し、PC やスマートフォンからも快適にアクセスできます。

### ユーザが抱える課題

-   来場者
    -   校内を回る際、どこに模擬店があるのか、どこで展示を行っているのかを把握するために、パンフレットを持ち歩く必要がある。
    -   校内が複雑で同じ構造で複数階あるため、初めて本校に訪れた人などは校内で迷ってしまう。
    -   パンフレットに掲載できる情報が限られてくるため、各展示や模擬店の詳細な情報を掲載することができない。
    -   展示・模擬店投票やステージ企画における各コンテストの投票など、限られた場所でしか投票することができず、ステージを見ながら投票することができない。 -
    -   学外の来場者へのパンフレット配布が当日の配布のみなっているため、学外からの来場者が事前に北斗祭についての詳細を確認することができない。
-   運営（管理者）
    -   パンフレットを一度入稿してしまうと情報修正をすることができず、情報修正等が容易でない。
    -   投票の集計を紙で行う必要があり、当日の限られた時間の中で行う必要があり、大変手間のかかる作業であった。

### 解決策

**HP(web アプリ)とすることにより端末や OS の制限を受けずに閲覧することが可能に**

-   来場者
    -   投票機能を実装することで、模擬店・展示投票や各種コンテスト投票などをオンラインでできるようになった。
    -   各模擬店や展示の個別ページの作成を行い、詳細な情報までアクセスを可能になった。
    -   校内に QR コードを設置し、現在地の特定や近くの展示、模擬店情報を掲載し、学外からの来場者が迷うことがないようになった。
    -   HP に全情報を掲載することで、パンフレットを持ち歩く必要をなくなった。
-   運営（管理者）
    -   HP としたため、情報修正が可能となり、当日のお知らせなど状況に合わせた情報を流すことができるようになった。
    -   投票の管理者ページを作成し、運営側がリアルタイムに投票状況を確認できるようになった。
    -   落とし物一覧ページを作成し、落とし物があれば受付担当者が Google フォームに情報を入力後、即時自動反映されるようになった。（技術スタッフがその場にいなくても更新できる仕組みを構築）

## ユーザ画面

| トップ画面                                                                                               | メニュー画面                                                                                               |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![トップ画面（スマホ）](https://github.com/user-attachments/assets/9639abf5-07e1-40f1-a5b3-2285cbc9f557) | ![メニュー画面（スマホ）](https://github.com/user-attachments/assets/25924e2b-2c25-45a6-a2c6-8691f210bead) |
| ロゴ、日時が一目でわかるように                                                                           | ハンバガーメニュー並びにアコーディオンメニューを実装                                                       |

<br>

| トップ画面（メニュー）                                                                                   | 展示一覧ページ                                                                                         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![メニュー画面(スマホ)](https://github.com/user-attachments/assets/2a3dc251-bdbf-4c5d-9edf-c58b99f99e87) | ![展示一覧（スマホ）](https://github.com/user-attachments/assets/59718d58-9788-4af2-b248-9e5cd037d40f) |
| 必要な情報に最短でアクセス可能、当日の使用頻度が高いメニューをトップ配置                                 | 展示の一覧を閲覧することができ、団体、場所、内容から簡単に絞り込みが可能                               |

## 使用実績

| 項目名               | 実績値    |
| -------------------- | --------- |
| ユーザ数             | 6,300 人  |
| 合計 PV 数           | 52,000 回 |
| 満足度（5 段階評価） | 4.23      |

> ※ユーザ数・合計 PV 数のデータは Google Analytics 集計値によります。  
> ※満足度は学内実施の事後アンケート集計値によります。

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

**デザイン**

-   Figma

**環境設定**

-   Docker

**その他**

-   Python
-   Git
-   GitHub

## インストールとセットアップ

```bash
git clone https://github.com/kyoutarou-com/hokutosai.git
npm ci
```

開発環境が VsCode の場合は、**esbenp.prettier-vscode**を入れてください。

## ページ一覧

### 概要

| ファイル名                              | ページ名                             |
| --------------------------------------- | ------------------------------------ |
| --------------------------------------- | ------------------------------------ |
| index.html                              | トップページ                         |
| about.html                              | 北斗祭概要                           |
| theme.html                              | テーマ                               |
| greeting.html                           | 挨拶                                 |
| news.html                               | ニュース                             |
| committee.html                          | 北斗祭実行委員会紹介                 |

### 企画

| ファイル名                              | ページ名                             |
| --------------------------------------- | ------------------------------------ |
| --------------------------------------- | ------------------------------------ |
| time-table.html                         | タイムテーブル                       |
| stage.html                              | ステージ企画紹介                     |
| stage-individual.html#{id}              | ステージ企画個別紹介                 |
| stall.html                              | 模擬店紹介                           |
| stall-individual.html#{id}              | 模擬店個別紹介                       |
| exhibition.html                         | 展示紹介                             |
| exhibition-individual.html#{id}         | 展示個別紹介                         |

### 投票

| ファイル名                              | ページ名                             |
| --------------------------------------- | ------------------------------------ |
| --------------------------------------- | ------------------------------------ |
| vote.html                               | 投票一覧                             |
| vote-cosplay.html                       | 仮装コンテスト投票                   |
| vote-exhibition.html                    | 展示企画投票                         |
| vote-karaoke.html                       | カラオケ投票                         |
| vote-muscle.html                        | キン肉マンコンテスト投票             |
| vote-stall.html                         | 模擬店企画投票                       |
| vote-voice.html                         | Nice Voice コンテスト投票            |
| vote-still.html                         | 投票時間外                           |
| vote-thanks.html                        | 投票完了                             |

### 来場案内

| ファイル名                              | ページ名                             |
| --------------------------------------- | ------------------------------------ |
| --------------------------------------- | ------------------------------------ |
| please.html                             | 来場者の方へのご案内                 |
| campus-map.html                         | キャンパスマップ                     |
| access.html                             | アクセス情報                         |
| question.html                           | よくある質問                         |
| where.html{id}                          | 現在地探索                           |
| lost-property.html                      | 落とし物一覧                         |
| pamphlet.html                           | 公式パンフレット                     |
| enquete.html                            | 来場者アンケート                     |
| recruit-sponsors.html                   | 協賛のお願い                         |
| sponsors.html                           | 協賛企業様一覧                       |
| special-thanks.html                     | スペシャルサンクス一覧               |

### 常設 サイト関連

| ファイル名                              | ページ名                             |
| --------------------------------------- | ------------------------------------ |
| --------------------------------------- | ------------------------------------ |
| inquiry.html                            | お問い合わせページ                   |
| form.html                               | お問い合わせフォーム                 |
| sending                                 | お問い合わせフォーム送信完了         |
| site-map.html                           | サイトマップ                         |
| site-policy.html                        | サイトポリシー                       |
| privacy-policy.html                     | プライバシーポリシー                 |

<div align="center">
    <img src="./dist/assets/img/screen.png" alt="">
</div>

## ツリー構造

.</br>
├── dist&nbsp;&nbsp;･･･････････････････････････････&nbsp;&nbsp;本番環境にデプロイするディレクトリ</br>
│ └── assets&nbsp;&nbsp;･･･････････････････････････&nbsp;&nbsp;ビルド結果の出力先</br>
│ ├── config&nbsp;&nbsp;･･･････････････････････････&nbsp;&nbsp;イベントや店舗情報の入力データをビルドした結果の出力先</br>
│ ├── css&nbsp;&nbsp;･･････････････････････････････&nbsp;&nbsp;CSS</br>
│ │ └── vendor&nbsp;&nbsp;･････････････････････････&nbsp;&nbsp;外部ライブラリ</br>
│ ├── img&nbsp;&nbsp;･･････････････････････････････&nbsp;&nbsp;画像ファイル</br>
│ │ ├── ad&nbsp;&nbsp;･････････････････････････････&nbsp;&nbsp;広告画像</br>
│ │ ├── campus-map&nbsp;&nbsp;････････････････････&nbsp;&nbsp;構内地図</br>
│ │ ├── exhibition&nbsp;&nbsp;････････････････････&nbsp;&nbsp;展示アイコン画像</br>
│ │ ├── favicon&nbsp;&nbsp;･･･････････････････････&nbsp;&nbsp;ファビコン</br>
│ │ ├── location&nbsp;&nbsp;･･････････････････････&nbsp;&nbsp;展示場所の画像</br>
│ │ ├── map&nbsp;&nbsp;････････････････････････････&nbsp;&nbsp;模擬店の場所の画像</br>
│ │ ├── stage&nbsp;&nbsp;･･････････････････････････&nbsp;&nbsp;ステージ企画の画像</br>
│ │ ├── stall&nbsp;&nbsp;･･････････････････････････&nbsp;&nbsp;模擬店アイコン画像</br>
│ │ └── vote&nbsp;&nbsp;･･･････････････････････････&nbsp;&nbsp;投票アイコンの画像</br>
│ └── js&nbsp;&nbsp;････････････････････････････････&nbsp;&nbsp;JavaScript</br>
│ └── vendor&nbsp;&nbsp;･･･････････････････････････&nbsp;&nbsp;外部ライブラリ</br>
├── qr-code&nbsp;&nbsp;････････････････････････････&nbsp;&nbsp;現在地探索ページの QR コード</br>
├── scripts&nbsp;&nbsp;････････････････････････････&nbsp;&nbsp;コマンド置き場</br>
└── src&nbsp;&nbsp･････････････････････････････････&nbsp;&nbsp;ソースコード</br>
└── assets&nbsp;&nbsp;･････････････････････････････&nbsp;&nbsp;編集データ</br>
├── config&nbsp;&nbsp;･････････････････････････････&nbsp;&nbsp;イベントや店舗情報の入力データ</br>
├── css&nbsp;&nbsp;････････････････････････････････&nbsp;&nbsp;CSS</span></br>
└── js&nbsp;&nbsp;･････････････････････････････････&nbsp;&nbsp;JavaScript</br>
└── module&nbsp;&nbsp;･････････････････････････････&nbsp;&nbsp;ユーティリティー関数</br>

## ブランチ

| ブランチ名      | 説明               |
| --------------- | ------------------ |
| Early-access    | 先行公開用ブランチ |
| develop         | 開発用ブランチ     |
| feature-enquete | 投票機能用ブランチ |
| main            | 本番環境用ブランチ |

`develop`ブランチを元に`feature-新しい機能名`という名前でブランチを作成し、作業を行います。バグが無いことを確認後、`develop`ブランチにマージします。本番環境に反映させたいときは更に、`main`ブランチにマージします。

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

## 今後の課題

-   タブレット端末（450px~700px）への対応が十分ではないため、タブレット端末へのレスポンシブ対応。
-   投票制限が Cookie 制限で行っているため、シークレットモード（プライベートモード）で投票された場合には、複数回投票が可能になってしまう点を修正。
-   ニュース等直接コードに打ち込まずに、入力できるように機能を追加。
-   各展示や模擬店等の個別情報を各代表者が自由に変更できるような機能を追加。
