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

const insertEventSection = (id, events) => {
	if (!events.length) {
		$(id).parent().remove();
		return;
	}

	let eventSection = "";
	for (const event of events) {
		eventSection += `
			<a href="${event["stall-link"]}">
				<section class="stall">
					<img class="stall-image" src="${event["stall-image1"]}" alt="店の画像" />
					<div class="stall-info">
						<h3 class="stall-name angle-2-box">${event["stall-name"]}</h3>
						<ul>
							<li class="stall-organization">${event["stall-organization"]}</li>
							<li class="stall-category"><i class="fa-solid fa-location-dot"></i>${event["stall-location"]}</li>
						</ul>
					</div>
				</section>
			</a>
			`;
	}
	$(id).append(eventSection);
};

const currentLocation = normalizeCurrentLocation(await fetchCurrentLocation());

$("#location").text(currentLocation.location);
$("#mapImg").attr("src", currentLocation.mapImg);
insertEventSection("#sameFloorStall", currentLocation.sameFloorStall);
insertEventSection("#sameFloorExhibition", currentLocation.sameFloorExhibition);
insertEventSection("#closeExhibition", currentLocation.closeExhibition);
