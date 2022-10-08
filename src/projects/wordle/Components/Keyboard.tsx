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
        <button
          onClick={submitHandler}
          className={classes.submit}
          value="Submit"
        >
          ENTER
        </button>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(1 1)"
            >
              <path d="M20 0H7L0 8l7 8h13a2 2 0 002-2V2a2 2 0 00-2-2zM17 5l-6 6M11 5l6 6" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
