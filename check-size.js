const sizeLimit = require('size-limit');
const filePlugin = require('@size-limit/file');
const path = require('path');

sizeLimit([filePlugin], [path.resolve(__dirname, './test.js')]).then(console.log);