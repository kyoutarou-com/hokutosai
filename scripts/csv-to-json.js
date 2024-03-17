"use strict";

const csvtojson = require("csvtojson/v2");
const fs = require("fs-extra");

const TARGET_FILENAMES = Object.freeze(["stall.csv", "stall-individual.csv", "exhibition.csv", "exhibition-individual.csv", "stage.csv", "stage-individual.csv"]);
const INPUT_DIRECTORY = "src/assets/config";
const OUTPUT_DIRECTORY = "dist/assets/config";

fs.remove(OUTPUT_DIRECTORY, () => {
	fs.mkdirs(OUTPUT_DIRECTORY);

	for (const targetFilename of TARGET_FILENAMES) {
		const targetFilenameWithoutExtension = targetFilename.slice(0, -4);
		const inputFilePath = `${INPUT_DIRECTORY}/${targetFilename}`;
		const outputFilePath = `${OUTPUT_DIRECTORY}/${targetFilenameWithoutExtension}.json`;

		csvtojson()
			.fromFile(inputFilePath)
			.then((jsonObj) => {
				const jsonStr = JSON.stringify(jsonObj);
				fs.writeFile(outputFilePath, jsonStr);
			});
	}
});
