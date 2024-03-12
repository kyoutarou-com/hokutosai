"use strict";

const getHash = () => {
	const hash = location.hash;

	// #記号を含まないハッシュを返す．
	return hash.substring(1);
};

const insertTextIntoElement = (id, text) => {
	$(id).text(text);
};

const insertValueIntoElement = (id, attribute, value) => {
	$(id).attr(attribute, value);
};

const onSuccess = (json) => {
	console.log(json);
	const hash = getHash();
	const index = parseInt(hash);

	insertTextIntoElement("#stall-name", json[index]["stall-name"]);
	insertValueIntoElement(".stall-image", "src", json[index]["image"]);
	insertTextIntoElement("#organization", json[index]["organization"]);
	insertTextIntoElement("#location", json[index]["location"]);
	insertTextIntoElement("#time", json[index]["time"]);
	insertTextIntoElement("#attention", json[index]["attention"]);
	insertTextIntoElement("#stall-comment", json[index]["stall-comment"]);
};

const onError = (error) => {
	console.error("Error occurred while fetching data:", error);
};

$.ajax({
	type: "GET",
	url: "../../../dist/assets/config/stall-individual.json",
	dataType: "json",
	async: false,
}).then(onSuccess, onerror);
