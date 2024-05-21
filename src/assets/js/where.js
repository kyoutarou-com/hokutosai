"use strict";

import $ from "jquery";

const convertSeparatedStringToNumber = (str, separator) => {
	if (str === "null") {
		return undefined;
	}
	return str.split(separator).map((str) => Number(str));
};

const fetchJson = (url) => fetch(url).then((result) => result.json());

const fetchEventData = async () => {
	const urls = ["./assets/config/where.json", "./assets/config/stall.json", "./assets/config/exhibition.json"];
	const [where, stall, exhibition] = await Promise.all(urls.map((url) => fetchJson(url)));
	["sameFloorStall", "sameFloorExhibition", "closeExhibition"].map((key) => {
		where.forEach((element, index) => {
			where[index][key] = convertSeparatedStringToNumber(element[key], "-");
		});
	});
	return { where, stall, exhibition };
};

console.log(await fetchEventData());
