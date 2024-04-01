"use strict";

import $ from "jquery";
import Cookies from "js-cookie";

const onSuccess = (data) => {
	console.log(data);

	if (Cookies.get("isVoted")) {
		window.alert("投票は1回だけだぞ");
		return;
	}

	Cookies.set("isVoted", true, { expires: 7 });

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

// 現在の日付と時間を取得
const currentDate = new Date();

console.log("現在の日付と時間:", currentDate);

// 許可された時間帯を設定
const startTime = new Date(currentDate.getFullYear(), 4, 25, 14); // 5月25日14時
const endTime = new Date(currentDate.getFullYear(), 4, 26, 10); // 5月26日10時

console.log("許可された時間帯開始:", startTime);
console.log("許可された時間帯終了:", endTime);

// 現在の時間が許可された時間帯内かどうかをチェック
if (currentDate < startTime || currentDate > endTime) {
	// 許可された時間帯外の場合はアラートを表示して送信ボタンを無効化
	alert("送信ボタンは5月25日14時から5月26日10時までの間しか押せません。");
	document.getElementById("vote-button").disabled = true; // 送信ボタンを無効化
}
