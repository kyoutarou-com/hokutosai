#!/bin/bash

TARGET_FILES=("stall.csv" "stall-individual.csv" "exhibition.csv" "exhibition-individual.csv")
INPUT_DIRECTORY="src/assets/config"
OUTPUT_DIRECTORY="dist/assets/config"

remove_file_extension() {
	echo "${1%.*}"
}

# Delete previous output results.
if [ -e ${OUTPUT_DIRECTORY} ]; then
	rm -r ${OUTPUT_DIRECTORY}
fi

mkdir -p ${OUTPUT_DIRECTORY}

for target_file in "${TARGET_FILES[@]}"; do
	target_file_without_extension="$(remove_file_extension "${target_file}")"
	npx csvtojson "${INPUT_DIRECTORY}/${target_file}" \
		>"${OUTPUT_DIRECTORY}/${target_file_without_extension}.json"
done
