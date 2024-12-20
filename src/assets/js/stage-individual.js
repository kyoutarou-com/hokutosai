"use strict";

import { loadJson, onError } from "./module/json.js";
import { getPageIndex } from "./module/hash.js";
import { insertTextIntoElement, insertValueIntoElement } from "./module/dom.js";

const onSuccess = (json) => {
	const stallIndex = getPageIndex();
	const image2 = json[stallIndex]["stall-image2"];
	const image3 = json[stallIndex]["stall-image3"];
	const image4 = json[stallIndex]["stall-image4"];

	let date;
	switch (json[stallIndex]["tab"]) {
		case "1":
			date = "１日目";
			break;
		case "2":
			date = "２日目";
			break;
		default:
			break;
	}

	insertTextIntoElement("#stall-name-pan", json[stallIndex]["stall-name"]);
	insertTextIntoElement("#stall-name", json[stallIndex]["stall-name"]);
	insertValueIntoElement("#stall-name-pan", "href", json[stallIndex]["stall-link"]);
	insertValueIntoElement("#stall-image1", "src", json[stallIndex]["stall-image1"]);
	insertValueIntoElement("#stall-image2", "src", json[stallIndex]["stall-image2"]);
	insertValueIntoElement("#stall-image3", "src", json[stallIndex]["stall-image3"]);
	insertValueIntoElement("#stall-image4", "src", json[stallIndex]["stall-image4"]);
	insertTextIntoElement("#stall-organization", json[stallIndex]["stall-organization"]);
	insertTextIntoElement("#stall-location", json[stallIndex]["stall-location"]);
	insertTextIntoElement("#stall-date", date);
	insertTextIntoElement("#stall-time", json[stallIndex]["time"]);
	insertTextIntoElement("#stall-comment", json[stallIndex]["stall-comment"]);

	if (image2 === "null") {
		$("#stall-image2").remove();
	}
	if (image3 === "null") {
		$("#stall-image3").remove();
	}
	if (image4 === "null") {
		$("#stall-image4").remove();
	}
};

loadJson("assets/config/stage.json", onSuccess, onError);
