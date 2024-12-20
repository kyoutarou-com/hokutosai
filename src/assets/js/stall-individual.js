"use strict";

import $ from "jquery";
import { loadJson, onError } from "./module/json.js";
import { getPageIndex } from "./module/hash.js";
import { insertTextIntoElement, insertValueIntoElement } from "./module/dom.js";

const getMenuItemType = (menuItem) => {
	switch (menuItem[0]) {
		case "!":
			return "attentionWriting";
		case "*":
			return "centering";
		default:
			return "normal";
	}
};

const insertMenu = (data) => {
	let menu = [];
	data.split("/").map((item) => {
		const [name, price] = item.split(":");
		const type = getMenuItemType(name);
		switch (type) {
			case "attentionWriting":
			case "centering":
				menu.push({ name: name.substr(1), price, type });
				break;
			case "normal":
				menu.push({ name, price, type });
				break;
		}
	});

	let menuHtml = "";
	for (const item of menu) {
		switch (item.type) {
			case "attentionWriting":
				menuHtml += `
					<div>
						<dt></dt>
						<dd>※${item.name}</dd>
					</div>
					`;
				break;
			case "centering":
				menuHtml += `
					<div class="center">
						<dt></dt>
						<dd>${item.name}</dd>
					</div>
					`;
				break;
			case "normal":
				menuHtml += `
				<div class="normal">
					<dt>${item.name}</dt>
					<dd>${item.price}</dd>
				</div>
				`;
				break;
		}
	}
	menuHtml += '<p class="attention">※価格は予定価格であり、変更となる場合がございます。予めご了承ください。</p>';
	$(".menu").append(menuHtml);
};

const onSuccess = (json) => {
	const stallIndex = getPageIndex();
	const image2 = json[stallIndex]["stall-image2"];
	const image3 = json[stallIndex]["stall-image3"];
	const image4 = json[stallIndex]["stall-image4"];
	const attention = json[stallIndex]["attention"];

	insertTextIntoElement("#stall-name-pan", json[stallIndex]["stall-name"]);
	insertTextIntoElement("#stall-name", json[stallIndex]["stall-name"]);
	insertValueIntoElement("#stall-name-pan", "href", json[stallIndex]["stall-link"]);
	insertValueIntoElement("#map-image", "href", json[stallIndex]["map-image"]);
	insertValueIntoElement("#stall-image1", "src", json[stallIndex]["stall-image1"]);
	insertValueIntoElement("#stall-image2", "src", json[stallIndex]["stall-image2"]);
	insertValueIntoElement("#stall-image3", "src", json[stallIndex]["stall-image3"]);
	insertValueIntoElement("#stall-image4", "src", json[stallIndex]["stall-image4"]);
	insertTextIntoElement("#stall-organization", json[stallIndex]["stall-organization"]);
	insertTextIntoElement("#stall-location", json[stallIndex]["stall-location"]);
	const [day1, time1, day2, time2] = json[stallIndex]["time"].split("/");
	const time = `${day1}<br>&nbsp;${time1}<br>${day2[0] === "※" ? "&nbsp;" : ""}${day2}<br>&nbsp;${time2 ?? ""}`;
	$("#stall-time").append(time);
	insertTextIntoElement("#stall-attention", json[stallIndex]["attention"]);
	insertTextIntoElement("#stall-comment", json[stallIndex]["stall-comment"]);

	insertMenu(json[stallIndex]["stall-menu"]);

	if (image2 === "null") {
		$("#stall-image2").remove();
	}
	if (image3 === "null") {
		$("#stall-image3").remove();
	}
	if (image4 === "null") {
		$("#stall-image4").remove();
	}
	if (attention === "") {
		$(".stall-attention").remove();
	}
};

loadJson("assets/config/stall.json", onSuccess, onError);
