require('../__no-framework-mocks__/utils')
// https://nodejs.org/api/modules.html#requireresolverequest-options
const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')
// Prime the module cache with the exported mock function.
require.cache[utilsPath] = require.cache[mockUtilsPath]

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
