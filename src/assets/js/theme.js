import $ from "jquery";

// 画面分割
$(window).on("load resize", function () {
	var windowWidth = window.innerWidth;
	var elements = $("#fixed-area");
	if (windowWidth >= 768) {
		Stickyfill.add(elements);
	} else {
		Stickyfill.remove(elements);
	}
});

// 文字ゆっくり出現

// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$(".blurTrigger").each(function () {
		//blurTriggerというクラス名が
		var elemPos = $(this).offset().top - 50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("blur"); // 画面内に入ったらblurというクラス名を追記
		} else {
			$(this).removeClass("blur"); // 画面外に出たらblurというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
	BlurTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
