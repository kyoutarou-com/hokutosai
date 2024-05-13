"use strict";

import $ from "jquery";
import Vivus from "vivus";

const bgFadeAnime = () => {
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
};

const stroke = new Vivus(
	"mask",
	{
		start: "manual",
		type: "scenario-sync",
		duration: 10,
		forceRender: false,
		animTimingFunction: Vivus.EASE,
	},
	() => {
		$("#mask").attr("class", "done");
	}
);

$(window).on("load", () => {
	$("#splash").delay(3000).fadeOut("slow");
	$("#splash_logo").delay(3000).fadeOut("slow");
	stroke.play();
	setTimeout(bgFadeAnime, 3000);
});
