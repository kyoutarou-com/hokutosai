"use strict";

import $ from "jquery";

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

export const selectTab = (tabId) => {
	$(".tabs li").removeClass("active");
	const index = tabId.substring(4);
	$(`.tabs li:nth-child(${index})`).addClass("active");
	$(".tab-area").removeClass("is-active");
	$(tabId).addClass("is-active");
};

export const selectMenu = (menuId) => {
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

export const tabInit = () => {
	$(".tabs li a , .menus li a").on("click", function () {
		const menuId = $(this).attr("href");
		selectMenu(menuId);
		return false;
	});

	$(window).on("load", () => {
		const hash = location.hash;
		selectMenu(hash);
	});
};
