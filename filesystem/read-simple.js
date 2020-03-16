/*
 * read-simple.js
 * Copyright (C) 2020 tsmith2 <tsmith2@caml112971>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

const fs = require('fs');
fs.readFile('target.txt', (err, data) => {
	if (err) {
		throw err;
	}
	console.log(data.toString());
});
  
    
