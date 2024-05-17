"use strict";

import $ from "jquery";
import Cookies from "js-cookie";

const getVoteType = () => $("#vote-field").data("vote");
const getSelectedVote = () => $(":checked").data("name");
const isSmartphone = () => !!navigator.userAgent.match(/iPhone|Android.+Mobile/);
const isVoted = () => !!Cookies.get(`is_${getVoteType()}_voted`);

const isVoteTime = () => {
	const currentTime = new Date();
	const firstTime = new Date(2024, 5 - 1, 25, 14);
	const lastTime = new Date(2024, 5 - 1, 26, 10);
	return firstTime <= currentTime && currentTime <= lastTime;
};

const transitionToVoteCompletePage = () => {
	location.href = "./vote-thanks.html";
};

const transitionToVoteStillPage = () => {
	location.href = "./vote-still.html";
};

const insertVoteField = () => {
	const voteType = getVoteType();
	const url = `https://hokutosai.net/api/vote/${voteType}`;
	const onSuccess = (result) => {
		for (const vote of result) {
			const voteName = vote.name.replace(/（.*）/, "");
			const htmlElement = `
				<label>
					<input type="radio" name="radio-3" data-name="${vote.name}" />
					${voteName}
				</label>
				`;
			$("#vote-field").append(htmlElement);
		}
	};
	const onError = () => {
		window.alert("データの取得に失敗しました。");
	};

	$.ajax({
		url: url,
		success: onSuccess,
		error: onError,
	});
};

const vote = (selectedVote) => {
	const voteType = getVoteType();
	const url = `https://hokutosai.net/api/vote/${voteType}/${selectedVote}`;
	const onSuccess = () => {
		Cookies.set(`is_${getVoteType()}_voted`, true, { expires: 2 });
		transitionToVoteCompletePage();
	};
	const onError = () => {
		window.alert("データの取得に失敗しました。");
	};

	$.ajax({
		url: url,
		method: "PUT",
		xhrFields: {
			withCredentials: true,
		},
		success: onSuccess,
		error: onError,
	});
};

$(window).on("load", () => {
	if (!isVoteTime()) {
		transitionToVoteStillPage();
	}

	if (isVoted()) {
		transitionToVoteCompletePage();
	}

	insertVoteField();
});

$("#vote-button").on("click", (event) => {
	event.preventDefault();

	if (!isSmartphone()) {
		window.alert("モバイル端末で投票してください。");
		return;
	}

	if (!navigator.cookieEnabled) {
		window.alert("Cookieを有効にしてください。");
	}

	const selectedVote = getSelectedVote();
	if (!selectedVote) {
		window.alert("回答を選択してください。");
		return;
	}

	vote(selectedVote);
});
