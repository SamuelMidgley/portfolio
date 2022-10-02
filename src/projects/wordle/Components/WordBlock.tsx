import { WordBlockProps } from "../wordle.types";
import classes from "./WordBlock.module.css";

const WordBlock = (props: WordBlockProps) => {
  const checkLetter = (state: string): string => {
    if (state === "correct") {
      return `${classes.block} ${classes.correct}`;
    } else if (state === "nearly") {
      return `${classes.block} ${classes.nearly}`;
    } else if (state === "incorrect") {
      return `${classes.block} ${classes.incorrect}`;
    } else {
      return `${classes.block} ${classes.unknown}`;
    }
  };
  return (
    <div
      className={`${classes.word_block} ${
        !props.guess.validWord ? classes.invalid_word : ""
      }`}
    >
      {props.guess.guess.map((letterState) => (
        <div
          key={(Math.random() * 1000000).toFixed(0)}
          className={checkLetter(letterState.state)}
        >
          {letterState.letter}
        </div>
      ))}
    </div>
  );
};

export default WordBlock;
