'use strict';

const uuidV4 = require('uuid/v4');

// Instead of percent encoding which increases the string length, select
// suitable replacement characters that are not used by base64 and do not
// affect url parsing. The padding character is removed as well.
function getUrlSafeBase64Uuid() {
  return getBase64Uuid()
    .replace(/\+/g, '-')
    .replace(/\//g, '.')
    .replace(/=/g, '');
}

function getBase64Uuid() {
  return getUuidBuffer().toString('base64');
}

function getUuidBuffer() {
  const buff = Buffer.alloc(16);
  uuidV4(null, buff);
  return buff;
}

function isUrlSafeBase64Uuid(id) {
  return /^[A-Za-z0-9-.]{22}$/.test(id);
}

module.exports = {
  get: getUrlSafeBase64Uuid,
  test: isUrlSafeBase64Uuid
};
