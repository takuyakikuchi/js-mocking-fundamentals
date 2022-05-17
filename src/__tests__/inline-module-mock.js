const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  /**
   * jest.SpyOn(object, methodName)
   * : Create a function(same as jest.fn()) and implement a call with object[methodName] passed as argument.
   * (https://jestjs.io/ja/docs/jest-object#jestspyonobject-methodname)
   */
  jest.spyOn(utils, 'getWinner')

  // Mock function
  // utils.getWinner = jest.fn((player1, player2) => player1)
  utils.getWinner.mockImplementation((player1, player2) => player1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  
  // Testing number of calls and its arguments
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])


  /**
   * mockFn.mockRestore()
   * : Restore the original function.
   * https://jestjs.io/ja/docs/mock-function-api#mockfnmockrestore
   */
  utils.getWinner.mockRestore()
})
