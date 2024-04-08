"use strict";

import $ from "jquery";
import Cookies from "js-cookie";

const transitionToVoteCompletePage = () => {
	location.href = $("#vote-button").attr("href");
};

const onVoteSuccess = (data) => {
	Cookies.set("isVoted", true, { expires: 2 });
	transitionToVoteCompletePage();
};

const onVoteError = (data) => {
	throw new data();
};

const vote = (selectedVote) => {
	$.ajax({
		url: `https://hokutofes.com/api/vote/${selectedVote}`,
		method: "PUT",
		xhrFields: {
			withCredentials: true,
		},
		success: onVoteSuccess,
		error: onVoteError,
	});
};

const isSmartphone = () => {
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
		return true;
	}
	return false;
};

const isVoteTime = () => {
	const currentTime = new Date();
	const firstTime = new Date(2024, 4, 25, 14);
	const lastTime = new Date(2024, 4, 26, 10);

	const isVoteTime = currentTime < firstTime || currentTime > lastTime;
	if (isVoteTime) {
		return true;
	}

	return false;
};

const isVoted = () => {
	if (Cookies.get("isVoted")) {
		return true;
	}
	return false;
};

const selectVote = () => {
	const selectedVote = $(":checked").data("name");
	return selectedVote;
};

$(window).on("load", () => {
	if (isVoted()) {
		window.alert("投票は1回だけだぞ");
		transitionToVoteCompletePage();
		return;
	}
});

$("#vote-button").on("click", (event) => {
	event.preventDefault();

	// if (!isSmartphone()) {
	// 	window.alert("スマホにしろ");
	// 	return;
	// }

	// if (!isVoteTime()) {
	// 	window.alert("投票時間外だぞ");
	// 	return;
	// }

	const selectedVote = selectVote();
	if (!selectedVote) {
		window.alert("選択されていません");
		return;
	}

	vote(selectedVote);
});
