import React, { useCallback, useEffect, useState } from 'react'
import WordleBlock from './components/WordleBlock'
import Keyboard from './components/Keyboard'
import { processGuess, processKeyboardState } from './wordle.helper'
import dictionaryAPI from './api'
import Modal from '../../components/modal/Modal'
import { allGuesses, correctWords, keyboardStateStart } from './Wordle.utils'
import TimedDiv from '../../components/timed-div/TimedDiv'
import './Wordle.scss'

const correctWord =
  correctWords[Math.floor(Math.random() * correctWords.length)]

const Wordle = () => {
  // State management
  // const [correctWord, setCorrectWord] = useState(
  //   correctWordBreakdown(chosenWord)
  // )
  const [numAttempts, setNumAttempts] = useState(0)
  const [letterIdx, setLetterIdx] = useState(0)
  const [guesses, setGuesses] = useState(allGuesses)
  const [keyboardState, setKeyboardState] = useState(keyboardStateStart)
  const [showModal, setShowModal] = useState(false)
  const [notAWord, setNotAWord] = useState(false)

  // Handle submit
  const submitHandler = useCallback(async () => {
    let isValidWord
    const currentGuess = guesses[numAttempts]
    if (currentGuess.guess[4].letter === '') {
      // Word is incomplete so submit fails
      return
    }

    const guessWord = currentGuess.guess
      .map((LetterState) => LetterState.letter)
      .join('')

    if (guessWord === correctWord) {
      setShowModal(true)
      return
    }

    // Check word is valid
    await dictionaryAPI(guessWord).then((res) => {
      if (res.title === 'No Definitions Found') {
        isValidWord = false
        setNotAWord(true)
      } else {
        isValidWord = true
      }
    })

    if (isValidWord === false) {
      setGuesses((prevGuesses) =>
        prevGuesses.map((guessObject, index) =>
          index === numAttempts
            ? { ...guessObject, validWord: false }
            : { ...guessObject }
        )
      )
      // Word is invalid so submit fails
      return
    }

    const processedGuess = processGuess(currentGuess.guess, correctWord)

    setGuesses((prevGuesses) =>
      prevGuesses.map((guessObject, index) =>
        index === numAttempts
          ? { guess: processedGuess, key: guessObject.key }
          : { ...guessObject }
      )
    )

    const newKeyboardState = processKeyboardState(processedGuess, keyboardState)

    setKeyboardState(newKeyboardState)

    // Move to next row
    setLetterIdx(0)
    setNumAttempts(numAttempts + 1)
  }, [guesses, keyboardState, numAttempts])

  // Handle keyboard changes
  const keyboardHandler = useCallback(
    (key: string) => {
      if (letterIdx >= 0 && (letterIdx < 5 || key === 'Delete')) {
        const currentGuess = guesses.filter(
          (guess, index) => index === numAttempts
        )[0]
        if (key === 'Delete') {
          if (letterIdx > 0) {
            currentGuess.guess[letterIdx - 1].letter = ''
            setLetterIdx((prevIdx) => prevIdx - 1)
          }
        } else if (
          currentGuess.guess[letterIdx].letter === '' &&
          letterIdx < 5
        ) {
          currentGuess.guess[letterIdx].letter = key.toUpperCase()
          setLetterIdx((prevIdx) => prevIdx + 1)
        }
        setGuesses(
          guesses.map((guessObject, index) =>
            index === numAttempts ? { ...currentGuess } : { ...guessObject }
          )
        )
      }
    },
    [guesses, letterIdx, numAttempts]
  )

  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        submitHandler()
      } else if (/^[a-zA-Z]/.test(event.key) && event.key.length === 1) {
        keyboardHandler(event.key)
      } else if (event.key === 'Backspace') {
        keyboardHandler('Delete')
      }
    },
    [keyboardHandler, submitHandler]
  )

  const modalClickHandler = () => {
    // VERY VERY HACKY but not sure why its not working
    window.location.reload()
    // setGuesses(allGuesses)
    // const newWord =
    //   correctWords[Math.floor(Math.random() * correctWords.length)]
    // setCorrectWord(correctWordBreakdown(newWord))
    // setNumAttempts(0)
    // setLetterIdx(0)
    // setKeyboardState(keyboardStateStart)
    // setShowModal(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  return (
    <div className="board">
      <h1 className="title">Wordle</h1>
      <TimedDiv state={notAWord} setState={setNotAWord} text="Not a word!" />
      <WordleBlock guesses={guesses} />
      <Keyboard
        keyboardState={keyboardState}
        handleKeyPress={keyboardHandler}
        handleSubmit={submitHandler}
      />
      <Modal
        title="Well done!"
        message="Reckon you can do it again?"
        button="Close"
        isOpen={showModal}
        toggleModal={modalClickHandler}
      />
    </div>
  )
}

export default Wordle
