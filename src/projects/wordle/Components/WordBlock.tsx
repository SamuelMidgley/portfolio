import classNames from 'classnames'
import { IGuess } from '../wordle.types'
import './WordBlock.scss'

interface IWordBlock {
  guess: IGuess[]
  correctWord: boolean
}

const WordBlock = (props: IWordBlock) => {
  const { guess, correctWord } = props

  return (
    <div
      className={classNames(
        'word_block',
        { invalid_word: false },
        { correct_word: correctWord }
      )}
    >
      {guess.map((letterState, index) => (
        <div
          key={`${index}_${letterState.letter}`}
          className={classNames('block', letterState.state)}
        >
          {letterState.letter}
        </div>
      ))}
    </div>
  )
}

export default WordBlock
