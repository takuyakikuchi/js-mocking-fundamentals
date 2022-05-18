const thumbWar = require('../thumb-war')
const utils = require('../utils')

/**
 * Mock the entire module.
 * @param {String} 'path to a module'
 * @param {Function} 'a module factory function'
 */
jest.mock('../utils', () => {
  return {
    // Mock the getWinner function.
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner', () => {
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  // Testing number of calls and its arguments
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])


  // Cleanup
  // Reset the mock function to the initial state.
  utils.getWinner.mockReset()
})
