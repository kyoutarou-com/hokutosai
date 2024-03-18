"use strict";

import $ from "jquery";
import { loadJson, onError } from "./module/json.js";
import { tabInit } from "./module/tab.js";

const createStall = (id, json) => {
	const stall = `
	<a href="${json["stall-link"]}">
		<div class="stall">
			<img class="stall-image" src="${json["stall-image"]}" alt="店の画像" />
			<div class="stall-info">
				<h3 class="stall-name angle-2-box">${json["stall-name"]}</h3>
				<ul>
					<li class="stall-organization">${json["stall-organization"]}</li>
					<li class="stall-category">${json["stall-location"]}</li>
				</ul>
			</div>
		</div>
	</a>
	`;
	$(id).append(stall);
};

const onSuccess = (json) => {
	for (const iterator of json) {
		let tab1;
		switch (iterator["tab1"]) {
			case "1":
				tab1 = "#product1";
				break;
			case "2":
				tab1 = "#product2";
				break;
			case "3":
				tab1 = "#product3";
				break;
			case "4":
				tab1 = "#product4";
				break;
			default:
				break;
		}
		createStall(tab1, iterator);

		let tab2;
		switch (iterator["tab2"]) {
			case "1":
				tab2 = "#location1";
				break;
			case "2":
				tab2 = "#location2";
				break;
			case "3":
				tab2 = "#location3";
				break;
			case "4":
				tab2 = "#location4";
				break;
			default:
				break;
		}
		createStall(tab2, iterator);

		let tab3;
		switch (iterator["tab3"]) {
			case "1":
				tab3 = "#organization1";
				break;
			case "2":
				tab3 = "#organization2";
				break;
			case "3":
				tab3 = "#organization3";
				break;
			case "4":
				tab3 = "#organization4";
				break;
			default:
				break;
		}
		createStall(tab3, iterator);
	}
};

tabInit();
loadJson("../../../dist/assets/config/stall.json", onSuccess, onError);
