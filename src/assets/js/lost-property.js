"use strict";

import $ from "jquery";

const fetchJson = (url) => fetch(url).then((result) => result.json());

const getLostProperties = async () => {
	const url = "https://script.google.com/macros/s/AKfycbwedDtfyJrk4idMho5ZjlSpT_JxyrhWREC5lusZp4R7F4qqhFD56d8D12f44uXYBa44KQ/exec";
	return await fetchJson(url);
};

const insertLostProperties = (lostProperties) => {
	let htmlElement = "";
	let count = 1;
	for (const lostProperty of lostProperties) {
		const { name, location, date, hours, minutes, img } = lostProperty;
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
