#!/bin/bash
#
# Convert csv file to json file.

TARGET_FILENAMES=("stall.csv" "stall-individual.csv" "exhibition.csv" "exhibition-individual.csv")
INPUT_DIRECTORY="src/assets/config"
OUTPUT_DIRECTORY="dist/assets/config"

# Delete previous output results.
if [ -e ${OUTPUT_DIRECTORY} ]; then
	rm -r ${OUTPUT_DIRECTORY}
fi

mkdir -p ${OUTPUT_DIRECTORY}

for target_filename in "${TARGET_FILENAMES[@]}"; do
	target_filename_without_extension=$(basename "${target_filename}" .csv)
	input_file_path="${INPUT_DIRECTORY}/${target_filename}"
	output_file_path="${OUTPUT_DIRECTORY}/${target_filename_without_extension}.json"
	npx csvtojson "${input_file_path}" >"${output_file_path}"
done
