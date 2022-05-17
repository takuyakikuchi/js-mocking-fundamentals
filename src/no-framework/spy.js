const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

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

/**
 * This function is responsible for tracking the originalValue.
 * @param {Object} object 
 * @param {String} methodName 
 */
function spyOn(object, methodName) {
  const originalValue = object[methodName]

  // Set an empty arrow function as a default implementation.
  object[methodName] = fn()

  object[methodName].mockRestore = () => {object[methodName] = originalValue}
}

spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p1)

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
// https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
utils.getWinner.mockRestore()
