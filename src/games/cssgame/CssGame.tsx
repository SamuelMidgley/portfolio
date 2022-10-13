import { useState } from 'react'
import './CssGame.css'

const randInt = (toNum: number): number => {
  return Math.floor(Math.random() * toNum + 1)
}

const generateRandomRGB = (): string => {
  let r = randInt(255)
  let g = randInt(255)
  let b = randInt(255)

  return `rgb(${r}, ${g}, ${b})`
}

const CssGame = () => {
  const [isCorrect, setIsCorrect] = useState(false)
  const [correctColorIdx, setCorrectColorIdx] = useState(randInt(2))
  const [colors, setColors] = useState([
    generateRandomRGB(),
    generateRandomRGB(),
    generateRandomRGB(),
  ])
  const [hasGuessed, setHasGuessed] = useState(false)

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!hasGuessed) {
      setHasGuessed(true)
    }

    if (
      (event.target as HTMLButtonElement).innerHTML === colors[correctColorIdx]
    ) {
      setIsCorrect(true)
      setColors([generateRandomRGB(), generateRandomRGB(), generateRandomRGB()])
      setCorrectColorIdx(randInt(2))
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="cssgame-container">
      <div
        className="cssgame-color_block"
        style={{ backgroundColor: colors[correctColorIdx] }}
      ></div>
      <div className="cssgame-options">
        {colors.map((color, idx) => {
          return (
            <button
              key={randInt(10000)}
              className="cssgame-option"
              onClick={onClickHandler}
            >
              {color}
            </button>
          )
        })}
      </div>
      {hasGuessed &&
        (isCorrect ? (
          <div className="cssgame-message">Correct</div>
        ) : (
          <div className="cssgame-message">Wrong</div>
        ))}
    </div>
  )
}

export default CssGame
