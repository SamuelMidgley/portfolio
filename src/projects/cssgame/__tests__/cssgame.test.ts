import { valToHex } from '../cssgame.helper'

it('Single channel to Hex', () => {
  expect(valToHex(123)).toBe('7B')
  expect(valToHex(54)).toBe('36')
  expect(valToHex(12)).toBe('0C')
  expect(valToHex(255)).toBe('FF')
  expect(valToHex(0)).toBe('00')
  expect(valToHex(200)).toBe('C8')
})
