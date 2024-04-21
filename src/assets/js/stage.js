"use strict";

import $ from "jquery";
import { loadJson, onError } from "./module/json";
import { tabInit } from "./module/tab";

const insertStageSection = (id, stageDescription) => {
	const stageSection = `
	<a href="${stageDescription["stall-link"]}">
		<section class="stall">
			<img class="stall-image" src="${stageDescription["stall-image1"]}" alt="店の画像" />
			<div class="stall-info">
				<h3 class="stall-name angle-2-box">${stageDescription["stall-name"]}</h3>
				<ul>
					<li class="stall-category">${stageDescription["stall-time"]}</li>
				</ul>
			</div>
		</section>
	</a>
`;
	$(id).append(stageSection);
};

const onSuccess = (stageDescriptions) => {
	for (const stageDescription of stageDescriptions) {
		let tab;
		switch (stageDescription["tab"]) {
			case "1":
				tab = "#tab1";
				break;
			case "2":
				tab = "#tab2";
				break;
			default:
			// tab = "#tab1";
		}
		insertStageSection(tab, stageDescription);
	}
};

tabInit();
loadJson("assets/config/stage.json", onSuccess, onError);
