import WordBlock from './WordBlock'
import classes from './WordleBlock.module.css'
import { WordleBlockProps } from '../wordle.types'
import { randInt } from '../../cssgame/cssgame.helper'

const WordleBlock = (props: WordleBlockProps) => {
  const { guesses } = props
  return (
    <div className={classes.wordle_block}>
      <div className={classes.wordle}>
        {guesses.map((wordObject) => (
          <WordBlock
            key={randInt(100000)}
            guess={wordObject}
            className={classes.word_block}
          />
        ))}
      </div>
    </div>
  )
}

export default WordleBlock
