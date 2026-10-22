const test = require('node:test');
const assert = require('node:assert/strict');
const server = require('./app');

test('application exports an HTTP server', () => {
    assert.equal(typeof server.listen, 'function');
});