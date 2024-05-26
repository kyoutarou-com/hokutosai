"use strict";

import $ from "jquery";

const fetchJson = (url) => fetch(url).then((result) => result.json());

const getLostProperties = async () => {
	const url = "https://script.google.com/macros/s/AKfycbwG0946HjFu3mJEOLRvv3Ao303DbdjaeJVVFbaxIsG7gYkb26k9CEJnoq6hTimMsPy0jA/exec";
	return await fetchJson(url);
};

const insertLostProperties = (lostProperties) => {
	let htmlElement = "";
	let count = 1;
	const lostPropertiesNotFoundOwner = lostProperties.filter((lostProperty) => !lostProperty.isOwnerFound);
	for (const lostPropertyNotFoundOwner of lostPropertiesNotFoundOwner) {
		const { name, location, date, hours, minutes, img } = lostPropertyNotFoundOwner;
		const dayOfTheWeek = date === 25 ? "土" : "日";
		htmlElement += `
			<div class="box-sub">
				<div class="box-title">No.${count}：${name}</div>
				<ul>
					<li>場所：${location}</li>
					<li>日付：5月${date}日（${dayOfTheWeek}）</li>
					<li>時間：${hours}時${minutes}分</li>
				</ul>
				<p class="attention">※写真は<a href="${img}" data-lightbox="time-table" data-title="落とし物" data-alt="落とし物" class="fas-image-expansioncircle">「こちら」</a>から</p>
			</div>
			`;
		count++;
	}
	$(".big").append(htmlElement);
};

$(async () => {
	const lostProperties = await getLostProperties();
	insertLostProperties(lostProperties);
});
