"use strict";

import $ from "jquery";
import Cookies from "js-cookie";

const transitionToVoteCompletePage = () => {
	location.href = $("#vote-button").attr("href");
};

const onVoteSuccess = () => {
	Cookies.set("isVoted", true, { expires: 2 });
	transitionToVoteCompletePage();
};

const onVoteError = (error) => {
	throw error;
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
	return !!navigator.userAgent.match(/iPhone|Android.+Mobile/);
};

const isVoteTime = () => {
	const currentTime = new Date();
	const firstTime = new Date(2024, 5 - 1, 25, 14);
	const lastTime = new Date(2024, 5 - 1, 26, 10);
	const isVoteTime = currentTime < firstTime || currentTime > lastTime;
	return isVoteTime;
};

const isVoted = () => {
	return !!Cookies.get("isVoted");
};

const selectVote = () => {
	const selectedVote = $(":checked").data("vote");
	return selectedVote;
};

$(window).on("load", () => {
	if (isVoted()) {
		window.alert("投票は１回しか出来ません");
		transitionToVoteCompletePage();
		return;
	}
});

$("#vote-button").on("click", (event) => {
	event.preventDefault();

	if (!isSmartphone()) {
		window.alert("モバイル端末で投票してください．");
		return;
	}

	if (!isVoteTime()) {
		window.alert("投票可能時間をご確認ください．");
		return;
	}

	const selectedVote = selectVote();
	if (!selectedVote) {
		window.alert("回答を選択してください.");
		return;
	}

	if (!navigator.cookieEnabled) {
		window.alert("Cookieを有効にしてください.");
	}

	vote(selectedVote);
});
