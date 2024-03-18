#!/bin/bash

npx webpack --mode production
node scripts/csv-to-json.js
