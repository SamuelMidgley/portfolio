import React, { useCallback, useEffect, useState } from 'react'
import WordleBlock from './Components/WordleBlock'
import Keyboard from './Components/Keyboard'
import classes from './Wordle.module.css'
import { correctWordBreakdown, theBigBoy } from './wordle.helper'
import dictionaryAPI from './api'
import Modal from '../../components/modal/Modal'
import { allGuesses, keyboardStateStart } from './Wordle.utils'

const correctWords = ['HOUSE', 'GHOUL', 'EPOCH', 'BREAD', 'GROUT']

const chosenWord = correctWords[Math.floor(Math.random() * correctWords.length)]

const Wordle = () => {
  // State management
  const [correctWord, setCorrectWord] = useState(
    correctWordBreakdown(chosenWord),
  )
  const [numAttempts, setNumAttempts] = useState(0)
  const [letterIdx, setLetterIdx] = useState(0)
  const [guesses, setGuesses] = useState(allGuesses)
  const [keyboardState, setKeyboardState] = useState(keyboardStateStart)
  const [showModal, setShowModal] = useState(false)

  // Handle submit
  const submitHandler = useCallback(async () => {
    let isValidWord
    const currentGuess = guesses.filter((guess) => guess.id === numAttempts)[0]
    if (currentGuess.guess[4].letter === '') return

    const guessWord = currentGuess.guess
      .map((LetterState) => LetterState.letter)
      .join('')
    // Check word is valid
    await dictionaryAPI(guessWord).then((res) => {
      if (res.title === 'No Definitions Found') {
        isValidWord = false
      } else {
        isValidWord = true
      }
    })

    if (isValidWord === false) {
      setGuesses((prevGuesses) =>
        prevGuesses.map((guessObject) =>
          guessObject.id === numAttempts
            ? { ...guessObject, validWord: false }
            : { ...guessObject },
        ),
      )
      return
    }

    const array = theBigBoy(currentGuess, keyboardState, correctWord)

    let processedKeyboardState = array.keyboardState
    let processedGuessObject = array.guessObject
    processedGuessObject.validWord = true

    if (processedGuessObject.correct === true) {
      setShowModal(true)
      return
    }

    setKeyboardState(processedKeyboardState)
    setGuesses((prevGuesses) =>
      prevGuesses.map((guessObject) =>
        guessObject.id === numAttempts
          ? { ...processedGuessObject }
          : { ...guessObject },
      ),
    )

    setLetterIdx(0)
    setNumAttempts(numAttempts + 1)
  }, [correctWord, guesses, keyboardState, numAttempts])

  // Handle keyboard changes
  const keyboardHandler = useCallback(
    (key: string) => {
      if (letterIdx >= 0 && (letterIdx < 5 || key === 'Delete')) {
        let currentGuess = guesses.filter(
          (guess) => guess.id === numAttempts,
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
          guesses.map((guessObject) =>
            guessObject.id === numAttempts
              ? { ...currentGuess }
              : { ...guessObject },
          ),
        )
      }
    },
    [guesses, letterIdx, numAttempts],
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
    [keyboardHandler, submitHandler],
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
    <div className={classes.board}>
      {/* <h1 className={classes.title}>Wordle</h1> */}
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
