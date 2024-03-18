"use strict";

import { loadJson, onError } from "./module/json.js";
import { getPageIndex } from "./module/hash.js";
import { insertTextIntoElement, insertValueIntoElement } from "./module/dom.js";

const onSuccess = (json) => {
	const stallIndex = getPageIndex();

	insertTextIntoElement("#stall-name", json[stallIndex]["stall-name"]);
	insertValueIntoElement(".stall-image", "src", json[stallIndex]["stall-image"]);
	insertTextIntoElement("#organization", json[stallIndex]["stall-organization"]);
	insertTextIntoElement("#location", json[stallIndex]["stall-location"]);
	insertTextIntoElement("#time", json[stallIndex]["time"]);
	insertTextIntoElement("#attention", json[stallIndex]["attention"]);
	insertTextIntoElement("#stall-comment", json[stallIndex]["stall-comment"]);
};

loadJson("../../../dist/assets/config/stall.json", onSuccess, onError);
