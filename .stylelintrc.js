module.exports = {
	extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order", "stylelint-config-prettier-scss"],
	ignoreFiles: ["**/node_modules/**"],
	rules: {
		"property-no-vendor-prefix": null,
		"comment-empty-line-before": null,
		"media-feature-range-notation": "prefix",
	},
};
