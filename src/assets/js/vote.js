"use strict";

import $ from "jquery";
import Cookies from "js-cookie";

const transitionToVoteCompletePage = () => {
	location.href = "./vote-thanks.html";
};

const transitionToVoteStillPage = () => {
	location.href = "./vote-still.html";
};

const onVoteSuccess = () => {
	Cookies.set("isVoted", true, { expires: 2 });
	transitionToVoteCompletePage();
};

const insertVoteField = () => {
	const voteType = $("#vote-field").data("vote");
	const url = `https://hokutosai.net/api/vote/${voteType}`;
	const success = (result) => {
		for (const vote of result) {
			const voteName = vote.name.replace(/（.*）/, "");
			const htmlElement = `
				<label>
					<input type="radio" name="radio-3" />
					${voteName}
				</label>
				`;
			$("#vote-field").append(htmlElement);
		}
	};
	const error = () => {
		window.alert("データの取得に失敗しました。");
	};

	$.ajax({
		url: url,
		success: success,
		error: error,
	});
};

const onVoteError = (error) => {
	throw error;
};

const vote = (selectedVote) => {
	$.ajax({
		url: `https://hokutosai.net/api/vote/${selectedVote}`,
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
	return firstTime < currentTime && currentTime < lastTime;
};

const isVoted = () => {
	return !!Cookies.get("isVoted");
};

const selectVote = () => {
	const selectedVote = $(":checked").data("vote");
	return selectedVote;
};

$(window).on("load", () => {
	if (!isVoteTime()) {
		transitionToVoteStillPage();
	}

	if (isVoted()) {
		transitionToVoteCompletePage();
		return;
	}

	insertVoteField();
});

$("#vote-button").on("click", (event) => {
	event.preventDefault();

	if (!isSmartphone()) {
		window.alert("モバイル端末で投票してください．");
		return;
	}

	if (!navigator.cookieEnabled) {
		window.alert("Cookieを有効にしてください.");
	}

	const selectedVote = selectVote();
	if (!selectedVote) {
		window.alert("回答を選択してください.");
		return;
	}

	vote(selectedVote);
});
