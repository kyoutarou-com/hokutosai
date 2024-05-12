"use strict";

function BgFadeAnime() {
	$(".bgLRextendTrigger").each(function () {
		const elemPos = $(this).offset().top - 50;
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("bgLRextend");
		} else {
			$(this).removeClass("bgLRextend");
		}
	});

	$(".bgappearTrigger").each(function () {
		const elemPos = $(this).offset().top - 50;
		const scroll = $(window).scrollTop();
		const windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("bgappear");
		} else {
			$(this).removeClass("bgappear");
		}
	});
}

$(window).scroll(() => {
	BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
});

$(window).on("load", () => {
	BgFadeAnime();
});
