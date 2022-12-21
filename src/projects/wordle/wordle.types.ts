export interface IGuess {
  letter: string
  state: string
}

export interface IAllGuesses {
  key: string
  guess: IGuess[]
  validWord?: boolean
}

export interface Guess {
  id: number
  guess: LetterState[]
  validWord?: boolean
  submitted: boolean
  correct?: boolean
}

export interface CorrectWord {
  word: string
  split: string[]
}

export interface WordleBlockProps {
  guesses: Guess[]
}

export interface WordBlockProps {
  key: number
  guess: Guess
  className: string
}

export interface KeyboardProps {
  keyboardState: LetterState[]
  handleKeyPress: (key: string) => void
  handleSubmit: () => void
}

export interface LetterState {
  letter: string
  state: string
}

export interface CharCount {
  letter: string
  count: number
}

export interface CorrectWordBreakdown {
  word: string
  breakdown: CharCount[]
}
