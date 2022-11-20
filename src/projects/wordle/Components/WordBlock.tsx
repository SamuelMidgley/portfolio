import { WordBlockProps } from '../wordle.types'
import classes from './WordBlock.module.css'

const WordBlock = (props: WordBlockProps) => {
  const { guess } = props
  const checkLetter = (state: string): string => {
    let classList
    // Make a switch case
    if (state === 'correct') {
      classList = `${classes.block} ${classes.correct}`
    } else if (state === 'nearly') {
      classList = `${classes.block} ${classes.nearly}`
    } else if (state === 'incorrect') {
      classList = `${classes.block} ${classes.incorrect}`
    } else {
      classList = `${classes.block} ${classes.unknown}`
    }
    return classList
  }

  return (
    <div
      className={`${classes.word_block} ${
        !guess.validWord ? classes.invalid_word : ''
      }`}
    >
      {guess.guess.map((letterState) => (
        <div
          key={(Math.random() * 1000000).toFixed(0)}
          className={checkLetter(letterState.state)}
        >
          {letterState.letter}
        </div>
      ))}
    </div>
  )
}

export default WordBlock
