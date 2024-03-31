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
		var elemPos = $(this).offset().top - 50; // 要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var $element = $(this);
		if (scroll >= elemPos - windowHeight) {
			setTimeout(function () {
				$element.addClass("blur"); // 画面内に入ってから3秒後にblurクラスを追加
			}, 500);
		} else {
			$element.removeClass("blur"); // 画面外に出たらblurというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
});

// PROTEENのメインロゴ
function BlurTextAnimeControl() {
	$(".blurTrigger-logo").each(function () {
		var elemPos = $(this).offset().top - 50; // 要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var $element = $(this);
		if (scroll >= elemPos - windowHeight) {
			setTimeout(function () {
				$element.addClass("blur"); // 画面内に入ってから3秒後にblurクラスを追加
			}, 2000);
		} else {
			$element.removeClass("blur"); // 画面外に出たらblurというクラス名を外す
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	BlurTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
});

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
	slideAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
