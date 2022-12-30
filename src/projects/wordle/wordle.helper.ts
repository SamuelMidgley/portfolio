import { IGuess } from './wordle.types'

interface INearlyCount {
  letter: string
  indexes: number[]
}

export function countOccuranceWithMap(word: string) {
  const map = new Map<string, number>()

  const wordArray = word.toLowerCase().split('')
  wordArray.forEach((letter) => {
    const count = map.get(letter)

    if (count === undefined) {
      map.set(letter, 1)
    } else {
      map.set(letter, count + 1)
    }
  })

  return map
}

export function processGuess(guess: IGuess[], correctWord: string) {
  let processedGuess: IGuess[] = []
  const nearlyMap = new Map<string, number[]>()

  const breakdown = countOccuranceWithMap(correctWord)

  guess.forEach((letterObject, index) => {
    const { letter } = letterObject
    const wordCount = breakdown.get(letter) ?? 0

    if (correctWord.includes(letter)) {
      if (letter === correctWord[index]) {
        breakdown.set(letter, wordCount - 1)
        processedGuess.push({ letter, state: 'correct' })
        return
      }
      const prevMapValue = nearlyMap.get(letter) ?? []
      prevMapValue.push(index)
      nearlyMap.set(letter, prevMapValue)
    }

    processedGuess.push({ letter, state: 'wrong' })
  })

  const nearlyArray = Array.from(
    nearlyMap,
    ([name, value]): INearlyCount => ({
      letter: name,
      indexes: value,
    })
  )

  nearlyArray.forEach((letterCountObject) => {
    let wordCount: number

    letterCountObject.indexes.forEach((index) => {
      wordCount = breakdown.get(letterCountObject.letter) ?? 0

      if (wordCount > 0) {
        breakdown.set(letterCountObject.letter, wordCount - 1)
        processedGuess = processedGuess.map((guessObject, guessObjectIndex) => {
          const nearlyState: IGuess = {
            letter: guessObject.letter,
            state: 'nearly',
          }
          return guessObjectIndex === index ? nearlyState : guessObject
        })
      }
    })
  })

  return processedGuess
}

export function getPriorityValue(state: string) {
  if (state === 'invalid') return 0
  if (state === 'wrong') return 1
  if (state === 'nearly') return 2
  if (state === 'correct') return 3
  return -1
}

export function shouldStateUpdate(currentState: string, newState: string) {
  const currentStatePriority = getPriorityValue(currentState)
  const newStatePriority = getPriorityValue(newState)

  return newStatePriority > currentStatePriority
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
