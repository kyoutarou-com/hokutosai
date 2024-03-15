"use strict";

export const getPageIndex = () => {
	const hash = location.hash;
	const stallIndex = parseInt(hash.substring(1));
	return stallIndex;
};
