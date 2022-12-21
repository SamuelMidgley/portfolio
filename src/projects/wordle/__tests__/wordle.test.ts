import {
  countOccurance,
  getPriorityValue,
  processGuess,
} from '../wordle.helper'

it('Count Occurance', () => {
  expect(countOccurance('Ghoul')).toMatchObject([
    { letter: 'g', count: 1 },
    { letter: 'h', count: 1 },
    { letter: 'o', count: 1 },
    { letter: 'u', count: 1 },
    { letter: 'l', count: 1 },
  ])
  expect(countOccurance('RATED')).toMatchObject([
    { letter: 'r', count: 1 },
    { letter: 'a', count: 1 },
    { letter: 't', count: 1 },
    { letter: 'e', count: 1 },
    { letter: 'd', count: 1 },
  ])
  expect(countOccurance('ooooO')).toMatchObject([{ letter: 'o', count: 5 }])
  expect(countOccurance('bananas')).toMatchObject([
    { letter: 'b', count: 1 },
    { letter: 'a', count: 3 },
    { letter: 'n', count: 2 },
    { letter: 's', count: 1 },
  ])
})

it('Process Guess', () => {
  const TEST_1_GUESS_OBJECT = [
    { letter: 's', state: 'n/a' },
    { letter: 'p', state: 'n/a' },
    { letter: 'a', state: 'n/a' },
    { letter: 'r', state: 'n/a' },
    { letter: 'e', state: 'n/a' },
  ]
  expect(processGuess(TEST_1_GUESS_OBJECT, 'brake')).toMatchObject([
    { letter: 's', state: 'wrong' },
    { letter: 'p', state: 'wrong' },
    { letter: 'a', state: 'correct' },
    { letter: 'r', state: 'nearly' },
    { letter: 'e', state: 'correct' },
  ])

  const TEST_2_GUESS_OBJECT = [
    { letter: 'g', state: 'n/a' },
    { letter: 'h', state: 'n/a' },
    { letter: 'o', state: 'n/a' },
    { letter: 'u', state: 'n/a' },
    { letter: 'l', state: 'n/a' },
  ]
  expect(processGuess(TEST_2_GUESS_OBJECT, 'ghost')).toMatchObject([
    { letter: 'g', state: 'correct' },
    { letter: 'h', state: 'correct' },
    { letter: 'o', state: 'correct' },
    { letter: 'u', state: 'wrong' },
    { letter: 'l', state: 'wrong' },
  ])

  const TEST_3_GUESS_OBJECT = [
    { letter: 'c', state: 'n/a' },
    { letter: 'l', state: 'n/a' },
    { letter: 'a', state: 'n/a' },
    { letter: 'n', state: 'n/a' },
    { letter: 'g', state: 'n/a' },
  ]
  expect(processGuess(TEST_3_GUESS_OBJECT, 'mouth')).toMatchObject([
    { letter: 'c', state: 'wrong' },
    { letter: 'l', state: 'wrong' },
    { letter: 'a', state: 'wrong' },
    { letter: 'n', state: 'wrong' },
    { letter: 'g', state: 'wrong' },
  ])
})

it('Get Priority Value', () => {
  expect(getPriorityValue('invalid')).toBe(0)
  expect(getPriorityValue('wrong')).toBe(1)
  expect(getPriorityValue('nearly')).toBe(2)
  expect(getPriorityValue('correct')).toBe(3)
  expect(getPriorityValue('hmmmmm')).toBe(-1)
})
