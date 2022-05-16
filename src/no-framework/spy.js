const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

/**
 * 
 * @param {function} implementation 
 * @returns function that calls the implementation with all of the arguments.
 */
function fn(implementation) {
  const mockFn = (...arguments) => {
    mockFn.mock.calls.push(arguments)
    return implementation(...arguments)
  }

  // All of the arguments that this function is called with.
  mockFn.mock = {calls: []};

  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner.mockImplementation((p1, p2) => p1)

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
// https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
utils.getWinner = originalGetWinner
