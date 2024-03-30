"use strict";

import $ from "jquery";
import ProgressBar from "progressbar.js";

$(function () {
	var $header = $("#header");
	var scrollSize = 800; //超えると表示
	$(window).on("load scroll", function () {
		var value = $(this).scrollTop();
		if (value > scrollSize) {
			$header.addClass("scroll");
		} else {
			$header.removeClass("scroll");
		}
	});
});

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {
	//id名を指定
	easing: "easeInOut", //アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000, //時間指定(1000＝1秒)
	strokeWidth: 0.2, //進捗ゲージの太さ
	color: "#555", //進捗ゲージのカラー
	trailWidth: 0.2, //ゲージベースの線の太さ
	trailColor: "#bbb", //ゲージベースの線のカラー
	text: {
		//テキストの形状を直接指定
		style: {
			//天地中央に配置
			position: "absolute",
			left: "50%",
			top: "50%",
			padding: "0",
			margin: "-30px 0 0 0", //バーより上に配置
			transform: "translate(-50%,-50%)",
			"font-size": "1rem",
			color: "#fff",
		},
		autoStyleContainer: false, //自動付与のスタイルを切る
	},
	step: function (state, bar) {
		bar.setText(Math.round(bar.value() * 100) + " %"); //テキストの数値
	},
});

//アニメーションスタート
bar.animate(1.0, function () {
	//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800); //アニメーションが終わったら#splashエリアをフェードアウト
});

// 背景がのびて出現

// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime() {
	// 背景色が伸びて出現（左から右）
	$(".bgLRextendTrigger").each(function () {
		//bgLRextendTriggerというクラス名が
		var elemPos = $(this).offset().top - 50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("bgLRextend"); // 画面内に入ったらbgLRextendというクラス名を追記
		} else {
			$(this).removeClass("bgLRextend"); // 画面外に出たらbgLRextendというクラス名を外す
		}
	});

	// 文字列を囲う子要素
	$(".bgappearTrigger").each(function () {
		//bgappearTriggerというクラス名が
		var elemPos = $(this).offset().top - 50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("bgappear"); // 画面内に入ったらbgappearというクラス名を追記
		} else {
			$(this).removeClass("bgappear"); // 画面外に出たらbgappearというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
	BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
