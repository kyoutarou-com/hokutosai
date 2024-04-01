"use strict";

import $ from "jquery";

const onSuccess = (data) => {
	console.log(data);
	location.href = $("#vote-button").attr("href");
};

const onFailure = () => {
	console.log("失敗");
};

const getVoteData = () => {
	const voteData = $(":checked").data("name");
	console.log(voteData);
	return voteData;
};

const vote = (name) => {
	$.ajax({
		url: `https://hokutofes.com/api/vote/${name}`,
		method: "PUT",
		xhrFields: {
			withCredentials: true,
		},
		success: onSuccess,
		error: onFailure,
	});
};

$("#vote-button").on("click", (event) => {
	event.preventDefault();

	const name = getVoteData();
	if (!name) {
		window.alert("選択されていません");
		return;
	}

	vote(name);
});
