import { countOccurance } from '../wordle.helper'

it('Count occurance', () => {
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
