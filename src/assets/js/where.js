"use strict";

import $ from "jquery";

const convertSeparatedStringToNumber = (str, separator) => {
	if (str === "null") {
		return [];
	}
	return str.split(separator).map((str) => Number(str));
};

const fetchJson = (url) => fetch(url).then((result) => result.json());

const fetchEventData = async () => {
	const urls = ["./assets/config/where.json", "./assets/config/stall.json", "./assets/config/exhibition.json"];
	const [where, stall, exhibition] = await Promise.all(urls.map((url) => fetchJson(url)));
	const currentLocation = where.filter((element) => `#${element.urlHash}` === location.hash)[0];
	["sameFloorStall", "sameFloorExhibition", "closeExhibition"].map((key) => {
		const closeEvents = convertSeparatedStringToNumber(currentLocation[key], "-");
		if (!closeEvents) {
			currentLocation[key] = [];
		}
		switch (key) {
			case "sameFloorStall":
				currentLocation[key] = closeEvents.map((index) => stall[index]);
				break;
			case "sameFloorExhibition":
			case "closeExhibition":
				currentLocation[key] = closeEvents.map((index) => exhibition[index]);
				break;
		}
	});
	return currentLocation;
};

const eventData = await fetchEventData();
console.log(eventData);

eventData.where[0].sameFloorStall.map((index) => {
	console.log(eventData.stall[index]);
});
