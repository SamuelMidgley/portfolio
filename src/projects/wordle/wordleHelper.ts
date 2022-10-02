import {
  Guess,
  LetterState,
  CorrectWordBreakdown,
  CharCount,
} from "./wordle.types";

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
      keyboardState.map((letterState) => {
        return letterState.letter === guessLetter
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
        keyboardState.map((letterState) => {
          return letterState.letter === guessLetter
            ? { ...letterState, state: "nearly" }
            : { ...letterState };
        });
      } else {
        guessObject.guess[index].state = "incorrect";
      }
    } else {
      guessObject.guess[index].state = "incorrect";
    }
  }
  guessObject.submitted = true;
  console.log(keyboardState);
  return { guessObject, keyboardState };
}
