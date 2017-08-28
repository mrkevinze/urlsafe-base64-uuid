'use strict';

const urlSafeBase64Uuid = require('./urlsafe-base64-uuid');

const example = urlSafeBase64Uuid.get();
console.log(example);
console.log(urlSafeBase64Uuid.test(example));
