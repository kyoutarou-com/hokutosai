"use strict";

import $ from "jquery";

const fetchJson = (url) => fetch(url).then((result) => result.json());

const fetchCurrentLocation = async () => {
	const urls = ["./assets/config/where.json", "./assets/config/stall.json", "./assets/config/exhibition.json"];
	return await Promise.all(urls.map((url) => fetchJson(url)));
};

const convertSeparatedStringToNumber = (str, separator) => {
	if (str === "null") return [];

	return str.split(separator).map((str) => Number(str));
};

const normalizeCurrentLocation = ([where, stall, exhibition]) => {
	const currentLocation = where.filter((element) => `#${element.urlHash}` === location.hash)[0];
	["sameFloorStall", "sameFloorExhibition", "closeExhibition"].map((key) => {
		const closeEvents = convertSeparatedStringToNumber(currentLocation[key], "-");
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

const currentLocation = normalizeCurrentLocation(await fetchCurrentLocation());

console.log(currentLocation);

$("#location").text(currentLocation.location);
$("#mapImg").attr("src", currentLocation.mapImg);
