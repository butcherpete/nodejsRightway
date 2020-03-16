/*
 * write.simple.js
 * Copyright (C) 2020 tsmith2 <tsmith2@caml112971>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';
 
const fs = require('fs');
const text = process.argv[2];

if(!text) {
	throw Error('No text spec')
};

fs.writeFile('target.txt', text, (err) => {
	if (err) {
	throw err;
}
console.log('File saved!');
});
