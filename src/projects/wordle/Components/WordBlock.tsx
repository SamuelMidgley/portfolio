import classNames from 'classnames'
import { IGuess } from '../wordle.types'
import './WordBlock.scss'

interface IWordBlock {
  guess: IGuess[]
}

const WordBlock = (props: IWordBlock) => {
  const { guess } = props

  return (
    <div className={classNames('word_block', { invalid_word: false })}>
      {guess.map((letterState, index) => (
        <div key={index} className={classNames('block', letterState.state)}>
          {letterState.letter}
        </div>
      ))}
    </div>
  )
}

export default WordBlock
