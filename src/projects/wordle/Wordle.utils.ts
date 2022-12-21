import { IAllGuesses, IGuess } from './wordle.types'

export const correctWords = [
  'HOUSE',
  'GHOUL',
  'EPOCH',
  'BREAD',
  'GROUT',
  'GHOST',
  'RHYME',
]

export const allGuesses: IAllGuesses[] = [
  {
    key: 'blah',
    guess: [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  },
  {
    key: 'also blah',
    guess: [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  },
  {
    key: 'also also blah',
    guess: [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  },
  {
    key: 'boop blah',
    guess: [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  },
  {
    key: 'rah blah',
    guess: [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  },
  {
    key: 'rah heh blah',
    guess: [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  },
]

export const keyboardStateStart: IGuess[] = [
  {
    letter: 'Q',
    state: 'Unknown',
  },
  {
    letter: 'W',
    state: 'Unknown',
  },
  {
    letter: 'E',
    state: 'Unknown',
  },
  {
    letter: 'R',
    state: 'Unknown',
  },
  {
    letter: 'T',
    state: 'Unknown',
  },
  {
    letter: 'Y',
    state: 'Unknown',
  },
  {
    letter: 'U',
    state: 'Unknown',
  },
  {
    letter: 'I',
    state: 'Unknown',
  },
  {
    letter: 'O',
    state: 'Unknown',
  },
  {
    letter: 'P',
    state: 'Unknown',
  },
  {
    letter: 'A',
    state: 'Unknown',
  },
  {
    letter: 'S',
    state: 'Unknown',
  },
  {
    letter: 'D',
    state: 'Unknown',
  },
  {
    letter: 'F',
    state: 'Unknown',
  },
  {
    letter: 'G',
    state: 'Unknown',
  },
  {
    letter: 'H',
    state: 'Unknown',
  },
  {
    letter: 'J',
    state: 'Unknown',
  },
  {
    letter: 'K',
    state: 'Unknown',
  },
  {
    letter: 'L',
    state: 'Unknown',
  },
  {
    letter: 'Z',
    state: 'Unknown',
  },
  {
    letter: 'X',
    state: 'Unknown',
  },
  {
    letter: 'C',
    state: 'Unknown',
  },
  {
    letter: 'V',
    state: 'Unknown',
  },
  {
    letter: 'B',
    state: 'Unknown',
  },
  {
    letter: 'N',
    state: 'Unknown',
  },
  {
    letter: 'M',
    state: 'Unknown',
  },
]
