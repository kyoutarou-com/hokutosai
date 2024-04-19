"use strict";

import { loadJson, onError } from "./module/json.js";
import { getPageIndex } from "./module/hash.js";
import { insertTextIntoElement, insertValueIntoElement } from "./module/dom.js";

const onSuccess = (json) => {
	const stallIndex = getPageIndex();
	console.log(json);

	insertTextIntoElement("#stall-name-pan", json[stallIndex]["stall-name"]);
	insertTextIntoElement("#stall-name", json[stallIndex]["stall-name"]);
	insertValueIntoElement("#stall-image", "src", json[stallIndex]["stall-image"]);
	insertTextIntoElement("#stall-organization", json[stallIndex]["stall-organization"]);
	insertTextIntoElement("#stall-location", json[stallIndex]["stall-location"]);
	insertTextIntoElement("#stall-time", json[stallIndex]["time"]);
	insertTextIntoElement("#stall-attention", json[stallIndex]["attention"]);
	insertTextIntoElement("#stall-comment", json[stallIndex]["stall-comment"]);
};

loadJson("assets/config/stage.json", onSuccess, onError);
