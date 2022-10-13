import {
  Guess,
  LetterState,
  CorrectWordBreakdown,
  CharCount,
} from "./wordle.types";

// Definitely a test for this
function countOccurance(word: string): CharCount[] {
  const charCount: CharCount[] = [];

  const wordArray = word.toLowerCase().split("");
  wordArray.forEach((letter) => {
    const filteredList = charCount.filter(
      (letterObject) => letterObject.letter === letter
    );

    if (filteredList.length > 0) {
      charCount.map((letterObject) => {
        return letterObject.letter === letter
          ? { ...letterObject, count: letterObject.count++ }
          : { ...letterObject };
      });
    } else {
      charCount.push({
        letter: letter,
        count: 1,
      });
    }
  });
  return charCount;
}

export function correctWordBreakdown(word: string): CorrectWordBreakdown {
  const fullBreakdown: CorrectWordBreakdown = {
    word: word,
    breakdown: countOccurance(word),
  };

  return fullBreakdown;
}

// This needs to be split into two extra functions
// One for keyboard
// One for board
export function theBigBoy(
  guessObject: Guess,
  keyboardState: LetterState[],
  correctWordBreakdown: CorrectWordBreakdown
) {
  // Loop through guess letters and assign state -> If letter is in correct place need to compare to breakdown
  // At the same time assign the keyboardState
  for (let index = 0; index < 5; index++) {
    const guessLetter = guessObject.guess[index].letter.toLowerCase();
    const correctWord = correctWordBreakdown.word.toLowerCase();
    if (correctWord[index] === guessLetter) {
      // correct letter so lets drop one from count in correct word breakdown
      correctWordBreakdown.breakdown.map((charCountObject) => {
        return charCountObject.letter === guessLetter
          ? { ...charCountObject, count: charCountObject.count-- }
          : { ...charCountObject };
      });

      // Update the state of the letter for the main block
      guessObject.guess[index].state = "correct";

      // Update the state of the keyboard
      keyboardState = keyboardState.map((letterState) => {
        return letterState.letter === guessLetter.toUpperCase()
          ? { ...letterState, state: "correct" }
          : { ...letterState };
      });
    } else if (correctWord.includes(guessLetter)) {
      const charCount = correctWordBreakdown.breakdown.filter(
        (charCountObject) => {
          return charCountObject.letter === guessLetter;
        }
      )[0];

      if (charCount.count > 0) {
        // Update the state of the letter for the main block
        guessObject.guess[index].state = "nearly";

        // Update the state of the keyboard
        keyboardState = keyboardState.map((letterState) => {
          return letterState.letter.toLowerCase() === guessLetter
            ? { ...letterState, state: "nearly" }
            : { ...letterState };
        });
      } else {
        guessObject.guess[index].state = "incorrect";
        // Update the state of the keyboard
        keyboardState = keyboardState.map((letterState) => {
          return letterState.letter.toLowerCase() === guessLetter
            ? { ...letterState, state: "incorrect" }
            : { ...letterState };
        });
      }
    } else {
      guessObject.guess[index].state = "incorrect";
      // Update the state of the keyboard
      keyboardState = keyboardState.map((letterState) => {
        return letterState.letter.toLowerCase() === guessLetter
          ? { ...letterState, state: "incorrect" }
          : { ...letterState };
      });
    }
  }
  guessObject.submitted = true;

  const isCorrect = guessObject.guess.filter(
    (LetterState) => LetterState.state === "correct"
  );

  if (isCorrect.length === 5) {
    guessObject.correct = true;
  }

  return { guessObject, keyboardState };
}
