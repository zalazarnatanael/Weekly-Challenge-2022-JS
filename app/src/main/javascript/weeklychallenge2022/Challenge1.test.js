// const { describe } = require('pm2')
const Challenge1 = require('./Challenge1')

describe('Challenge1', () => {
  test('Is an anagram', () => {
    expect(Challenge1('chocolate', 'colatecho')).toBe(true)
  })

  test("Different words", () => {
    expect(Challenge1('table', 'icecream')).toBe(false)
  })

  test("Same words", () => {
    expect(Challenge1('table', 'table')).toBe(false)
  })
})