"use strict";

import { loadJson, onError } from "./module/json.js";
import { getStallIndex } from "./module/hash.js";
import { insertTextIntoElement, insertValueIntoElement } from "./module/dom.js";

const onSuccess = (json) => {
	const stallIndex = getStallIndex;

	insertTextIntoElement("#stall-name", json[stallIndex]["stall-name"]);
	insertValueIntoElement(".stall-image", "src", json[stallIndex]["image"]);
	insertTextIntoElement("#organization", json[stallIndex]["organization"]);
	insertTextIntoElement("#location", json[stallIndex]["location"]);
	insertTextIntoElement("#time", json[stallIndex]["time"]);
	insertTextIntoElement("#attention", json[stallIndex]["attention"]);
	insertTextIntoElement("#stall-comment", json[stallIndex]["stall-comment"]);
};

loadJson("../../../dist/assets/config/stall-individual.json", onSuccess, onError);
// TODO: エラーが出るんであとで修正
// ほげほげ
