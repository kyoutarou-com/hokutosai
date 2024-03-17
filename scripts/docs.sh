#!/bin/bash
#
# Define commands to generate documentation

OUTPUT_DIRECTORY=docs

if [ -e ${OUTPUT_DIRECTORY} ]; then
	rm -r ${OUTPUT_DIRECTORY}
fi

npx jsdoc -d ${OUTPUT_DIRECTORY} -r scripts/
