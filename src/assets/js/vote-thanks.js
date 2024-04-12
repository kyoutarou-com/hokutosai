"use strict";

import $ from "jquery";
import { loadJson, onError } from "./module/json.js";

const onSuccess = (json) => {
	$(".name").text(json[0]["name"]);
};

loadJson("../../../dist/assets/config/vote.json", onSuccess, onError);
