"use strict";

import $ from "jquery";
import { loadJson, onError } from "./module/json.js";

const onSuccess = (json) => {
	const data = json.find((obj) => obj.id === location.hash.substring(1));
	$(".name").text(data["name"]);
};

loadJson("../../../dist/assets/config/vote.json", onSuccess, onError);
