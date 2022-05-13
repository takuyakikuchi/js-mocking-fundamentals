const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Monkey patching
// Mocking the utils.getWinner function by overrding the property
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('TK', 'Kent C. Dodds');

// https://nodejs.org/api/assert.html#assertstrictequalactual-expected-message
assert.strictEqual(winner, 'TK');

// Clean up mock function to avoid impacting other tests.
const originalGetWinner = utils.getWinner;
utils.getWinner = originalGetWinner;
