"use strict";

import $ from "jquery";
import { loadJson, onError } from "./module/json.js";

const getTabId = (menuId) => {
	let tabId;
	switch (menuId) {
		case "#product1":
		case "#product2":
		case "#product3":
		case "#product4":
			tabId = "#tab1";
			break;
		case "#location1":
		case "#location2":
		case "#location3":
		case "#location4":
			tabId = "#tab2";
			break;
		case "#organization1":
		case "#organization2":
		case "#organization3":
		case "#organization4":
			tabId = "#tab3";
			break;
		default:
			// menuIdが無効の値の場合最初のタブのidを代入
			tabId = "#tab1";
			break;
	}
	return tabId;
};

const selectTab = (tabId) => {
	$(".tabs li").removeClass("active");
	const index = tabId.substring(4);
	$(`.tabs li:nth-child(${index})`).addClass("active");
	$(".tab-area").removeClass("is-active");
	$(tabId).addClass("is-active");
};

const selectMenu = (menuId) => {
	if (!menuId) {
		menuId = "#product1";
	}
	const tabId = getTabId(menuId);
	selectTab(tabId);

	// メニューの選択;
	$(".menus li")
		.find("a")
		.each(function () {
			const id = $(this).attr("href");
			if (id === menuId) {
				const parent = $(this).parent();
				$(".menus li").removeClass("active");
				$(parent).addClass("active");
				$(".menu-area").removeClass("is-active");
				$(menuId).addClass("is-active");
			}
		});
};

$(".tabs li a , .menus li a").on("click", function () {
	const menuId = $(this).attr("href");
	selectMenu(menuId);
	return false;
});

$(window).on("load", () => {
	const hash = location.hash;
	selectMenu(hash);
});

const createStall = (id, json) => {
	const stall = `
	<a href="${json["stall-link"]}">
		<div class="stall">
			<img class="stall-image" src="${json["stall-image"]}" alt="店の画像" />
			<div class="stall-info">
				<h3 class="stall-name angle-2-box">${json["stall-name"]}</h3>
				<ul>
					<li class="stall-organization">${json["stall-organization"]}</li>
					<li class="stall-category">${json["stall-category"]}</li>
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

loadJson("../../../dist/assets/config/stall.json", onSuccess, onError);
