#!/bin/bash

# sudo npm install --save-dev jsdoc-to-markdown -g
# sudo npm install -g terser
terser dist/webpagelogger.js -o dist/webpagelogger.min.js -c -m

cp _README.md README.md
jsdoc2md webpagelogger.js >> README.md

