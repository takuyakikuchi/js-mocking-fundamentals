const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  // Mock function
  utils.getWinner = jest.fn((player1, player2) => player1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  
  // console.log(utils.getWinner)
  
  // Testing number of calls and its arguments
  // expect(utils.getWinner).toHaveBeenCalledTimes(2)
  // expect(utils.getWinner).toHaveBeenCalledWith('Kent C. Dodds', 'Ken Wheeler')
  // expect(utils.getWinner).toHaveBeenNthCalledWith(1,'Kent C. Dodds', 'Ken Wheeler')
  // expect(utils.getWinner).toHaveBeenNthCalledWith(2,'Kent C. Dodds', 'Ken Wheeler')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler'],
  ])


  // cleanup
  utils.getWinner = originalGetWinner
})
