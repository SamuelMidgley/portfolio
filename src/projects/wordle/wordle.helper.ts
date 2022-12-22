import { IGuess } from './wordle.types'

interface ICount {
  letter: string
  count: number
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

  // const array = Array.from(map, ([name, value]) => ({
  //   letter: name,
  //   count: value,
  // }))
  return map
}

export function processGuess(guess: IGuess[], correctWord: string) {
  const processedGuess: IGuess[] = []
  const breakdown = countOccuranceWithMap(correctWord)

  guess.forEach((letterObject, index) => {
    const { letter } = letterObject

    if (!correctWord.includes(letter)) {
      processedGuess.push({ letter, state: 'wrong' })
      return
    }

    const wordCount = breakdown.get(letter) ?? 0

    if (letter === correctWord[index]) {
      if (wordCount > 0) {
        breakdown.set(letter, wordCount - 1)
        processedGuess.push({ letter, state: 'correct' })
      } else {
        let id = index
        while (id >= 0) {
          id -= 1
          const prevGuess = processedGuess[id]
          if (prevGuess.state === 'nearly') {
            const matchedId = id
            processedGuess.map((guessObject, guessId) =>
              guessId === matchedId
                ? { letter: guessObject.letter, state: 'wrong' }
                : guess
            )
          }
        }
      }
      return
    }

    if (wordCount > 0) {
      breakdown.set(letter, wordCount - 1)
      processedGuess.push({ letter, state: 'nearly' })
    } else {
      processedGuess.push({ letter, state: 'wrong' })
    }
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
