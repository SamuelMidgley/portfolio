import { CharCount, IGuess } from './wordle.types'

export function countOccurance(word: string): CharCount[] {
  const charCount: CharCount[] = []

  const wordArray = word.toLowerCase().split('')
  wordArray.forEach((letter) => {
    const filteredList = charCount.filter(
      (letterObject) => letterObject.letter === letter
    )

    if (filteredList.length > 0) {
      charCount.map((letterObject) => {
        return letterObject.letter === letter
          ? { ...letterObject, count: letterObject.count++ }
          : { ...letterObject }
      })
    } else {
      charCount.push({
        letter,
        count: 1,
      })
    }
  })
  return charCount
}

export function processGuess(guess: IGuess[], correctWord: string) {
  const processedGuess: IGuess[] = []
  // As i'm going along add to a new array which is like
  // AGREE
  // BEECH
  // EPOCH
  // { letter: count }

  guess.forEach((letterObject, index) => {
    const { letter } = letterObject
    if (!correctWord.includes(letter)) {
      processedGuess.push({ letter, state: 'wrong' })
    } else if (letter === correctWord[index]) {
      processedGuess.push({ letter, state: 'correct' })
    } else {
      processedGuess.push({ letter, state: 'nearly' })
    }

    // BANAN
    // A
    //
  })

  return processedGuess
}

// INCLUDE TESTS
export function getPriorityValue(state: string) {
  if (state === 'invalid') return 0
  if (state === 'wrong') return 1
  if (state === 'nearly') return 2
  if (state === 'correct') return 3
  return -1
}

// INCLUDE TESTS
export function shouldStateUpdate(currentState: string, newState: string) {
  const currentStatePriority = getPriorityValue(currentState)
  const newStatePriority = getPriorityValue(newState)

  return newStatePriority >= currentStatePriority
}

// INCLUDE TESTS
export function processKeyboardState(guess: IGuess[], keyboardState: IGuess[]) {
  let keyboardStateCopy = keyboardState
  guess.forEach((guessObject) => {
    const currentState = keyboardState.filter(
      (keyboardObject) => keyboardObject.letter === guessObject.letter
    )[0]

    if (shouldStateUpdate(currentState.state, guessObject.state)) {
      keyboardStateCopy = keyboardStateCopy.map((keyObject) =>
        keyObject.letter === guessObject.letter ? guessObject : keyObject
      )
    }
  })

  return keyboardStateCopy
}
