/**
 * @fileoverview Define a command to convert a csv file to a json file
 * @example node ./csv-to-json.js
 */

"use strict";

const csvtojson = require("csvtojson/v2");
const fs = require("fs-extra");

const TARGET_FILENAMES = Object.freeze(["stall.csv", "exhibition.csv", "stage.csv", "where.csv"]);
const INPUT_DIRECTORY = "src/assets/config";
const OUTPUT_DIRECTORY = "dist/assets/config";

/**
 * Remove an extension from a filename
 * @param {string} filename Target filename
 * @param {string} extension Extension to be removed
 * @returns {string} Filename with extension removed
 */
const getFilenameWithoutExtension = (filename, extension) => {
	return filename.replace(RegExp(`${extension}\$`), "");
};

/**
 * Convert csv file to json file.
 * @returns {void}
 */
const csvFileToJsonFile = () => {
	fs.mkdirs(OUTPUT_DIRECTORY);

	for (const targetFilename of TARGET_FILENAMES) {
		const targetFilenameWithoutExtension = getFilenameWithoutExtension(targetFilename, ".csv");
		const inputFilePath = `${INPUT_DIRECTORY}/${targetFilename}`;
		const outputFilePath = `${OUTPUT_DIRECTORY}/${targetFilenameWithoutExtension}.json`;

		csvtojson()
			.fromFile(inputFilePath)
			.then((jsonObj) => {
				const jsonStr = JSON.stringify(jsonObj);
				fs.writeFile(outputFilePath, jsonStr);
			});
	}
};

fs.remove(OUTPUT_DIRECTORY, csvFileToJsonFile);
