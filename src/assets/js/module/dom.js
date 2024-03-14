"use strict";

import $ from "jquery";

export const insertTextIntoElement = (id, text) => {
	$(id).text(text);
};

export const insertValueIntoElement = (id, attribute, value) => {
	$(id).attr(attribute, value);
};
