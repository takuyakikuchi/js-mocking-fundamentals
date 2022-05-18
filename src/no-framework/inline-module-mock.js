/**
 * Mock function factory.
 * @param {function} implementation 
 * @returns function that calls the implementation with all of the arguments.
 */
function fn(implementation = () => {}) {
  const mockFn = (...arguments) => {
    mockFn.mock.calls.push(arguments)
    return implementation(...arguments)
  }

  // All of the arguments that this function is called with.
  mockFn.mock = {calls: []};

  mockFn.mockImplementation = newImplementation => {implementation = newImplementation}

  return mockFn
}

// https://nodejs.org/api/modules.html#requireresolverequest-options
const utilsPath = require.resolve('../utils')
/**
 * Simulate mocking entire module with require.cache.
 * https://nodejs.org/api/modules.html#requirecache
 */
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    // Mock the getWinner function.
    getWinner: fn((p1, p2) => p1)
  }
}

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
// https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
delete require.cache[utilsPath]
