import WordBlock from './WordBlock'
import { IAllGuesses } from '../wordle.types'
import './WordleBlock.scss'

interface IWordleBlock {
  guesses: IAllGuesses[]
}

const WordleBlock = (props: IWordleBlock) => {
  const { guesses } = props
  return (
    <div className="wordle_block">
      <div className="wordle">
        {guesses.map((guessObject) => (
          <WordBlock
            key={guessObject.key}
            guess={guessObject.guess}
            correctWord={guessObject.correctWord ?? false}
          />
        ))}
      </div>
    </div>
  )
}

export default WordleBlock
