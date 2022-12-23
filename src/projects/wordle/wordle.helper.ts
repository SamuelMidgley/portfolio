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
  // New idea
  // When looping through only add correct values
  // Store indexes of nearly values
  // At the end loop through and if the count permits adjust the wrong states to be nearly
  let processedGuess: IGuess[] = []
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
        const correctLetter: IGuess = { letter, state: 'correct' }
        processedGuess.push(correctLetter)
      } else {
        let id = index
        while (id >= 0) {
          id -= 1
          const prevGuess = guess[id]
          if (prevGuess.state === 'nearly') {
            const matchedId = id
            processedGuess = guess.map((guessObject, guessId) => {
              const correctedLetter: IGuess = {
                letter: guessObject.letter,
                state: 'wrong',
              }
              const thingy = guessId === matchedId ? correctedLetter : guess
              return thingy
            })
          }
        }
      }
      return
    }

    if (wordCount > 0) {
      breakdown.set(letter, wordCount - 1)
      const nearlyLetter: IGuess = { letter, state: 'nearly' }
      processedGuess.push(nearlyLetter)
    } else {
      const wrongLetter: IGuess = { letter, state: 'wrong' }
      processedGuess.push(wrongLetter)
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
