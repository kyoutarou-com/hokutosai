"use strict";

export const getStallIndex = () => {
	hash = location.hash;
	const stallIndex = parseInt(hash.substring(1));
	return stallIndex;
};
