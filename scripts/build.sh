#!/bin/bash

npx webpack --mode production
./scripts/csv-to-json.sh
