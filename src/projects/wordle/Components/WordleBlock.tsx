import WordBlock from "./WordBlock";
import classes from "./WordleBlock.module.css";
import { WordleBlockProps } from "../wordle.types";

const WordleBlock = (props: WordleBlockProps) => {
  return (
    <div className={classes.wordle_block}>
      <div className={classes.wordle}>
        {props.guesses.map((wordObject, index) => (
          <WordBlock
            key={index}
            guess={wordObject}
            className={classes.word_block}
          />
        ))}
      </div>
    </div>
  );
};

export default WordleBlock;
