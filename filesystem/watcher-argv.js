/*
 * watcher-argv.js
 * Copyright (C) 2020 tsmith2 <tsmith2@caml112971>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';

const fs = require('fs');
const filename = process.argv[2];
if (!filename) {
	throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Now watching ${filename} for changes...`);
    
