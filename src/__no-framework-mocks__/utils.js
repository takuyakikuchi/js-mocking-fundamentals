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
  return mockFn
}

module.exports = {
  getWinner: fn((p1, p2) => p1)
}
