/*
 * read-stream.js
 * Copyright (C) 2020 tsmith2 <tsmith2@caml112971>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';

require('fs').createReadStream(process.argv[2])
	.on('data', chunk => process.stdout.write(chunk))
 	.on('error', err => process.stderr.write(`ERROR: ${err.message}\n`)); 
    
