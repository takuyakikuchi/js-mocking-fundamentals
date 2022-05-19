const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Taking shared mock function from '__mocks__/utils.js' file.
jest.mock('../utils')

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
