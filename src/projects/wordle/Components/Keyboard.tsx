import React from "react";
import classes from "./Keyboard.module.css";
import { KeyboardProps } from "../wordle.types";

const Keyboard = (props: KeyboardProps) => {
  const row1 = props.keyboardState.slice(0, 10);
  const row2 = props.keyboardState.slice(10, 19);
  const row3 = props.keyboardState.slice(19, 26);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.handleKeyPress((event.target as HTMLButtonElement).value);
  };

  const submitHandler = () => {
    props.handleSubmit();
  };

  return (
    <div className={classes.keyboard}>
      <div className={classes.keyboard_row}>
        {row1.map((letterState) => (
          <button
            key={letterState.letter}
            onClick={clickHandler}
            className={classes.keyboard_key}
            value={letterState.letter}
          >
            {letterState.letter}
          </button>
        ))}
      </div>
      <div className={classes.keyboard_row}>
        {row2.map((letterState) => (
          <button
            key={letterState.letter}
            onClick={clickHandler}
            className={classes.keyboard_key}
            value={letterState.letter}
          >
            {letterState.letter}
          </button>
        ))}
      </div>
      <div className={classes.keyboard_row}>
        {row3.map((letterState) => (
          <button
            key={letterState.letter}
            onClick={clickHandler}
            className={classes.keyboard_key}
            value={letterState.letter}
          >
            {letterState.letter}
          </button>
        ))}
        <button
          onClick={clickHandler}
          className={classes.delete}
          value="Delete"
        >
          Delete
        </button>
      </div>
      <div className={classes.keyboard_row}>
        <button
          onClick={submitHandler}
          value="Submit"
          className={classes.submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
