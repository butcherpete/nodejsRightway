/*
 * test-json-service.js
 * Copyright (C) 2020 tsmith2 <tsmith2@caml112971>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

const server = require('net').createServer(connection => {
  console.log('Subscriber connected');

  // Two message chunks that make a complete message
  const firstChunk = '{"type": "changed", "timesta';
  const secondChunk = 'mp": 1450694370094}\n';

  // Send the first chunk immediately
  connection.write(firstChunk);

  // After a short delay, send the other chunk
  const timer = setTimeout(() => {
    connection.write(secondChunk);
    connection.end();
  }, 100);

  //Clear timer when the connection ends.
  connection.on('end', () => {
    clearTimeout(timer);
    console.log('Subscriber disconnected.');
  });
});

server.listen(60300, function() {
    console.log('Test server listening for subscribers... ');
});
