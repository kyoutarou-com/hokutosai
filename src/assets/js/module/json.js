"use strict";

import $ from "jquery";

export const onError = (error) => {
	window.alert("ファイルの読み込みに失敗しました。");
	console.log(error);
};

export const loadJson = (path, onSuccess, onError) => {
	$.ajax({
		type: "GET",
		url: path,
		dataType: "json",
		async: false,
	}).then(onSuccess, onError);
};
