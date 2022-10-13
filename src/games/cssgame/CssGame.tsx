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
  const [numCorrect, setNumCorrect] = useState(0)
  const [correctColorIdx, setCorrectColorIdx] = useState(randInt(2))
  const [colors, setColors] = useState([
    generateRandomRGB(),
    generateRandomRGB(),
    generateRandomRGB(),
  ])

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (
      (event.target as HTMLButtonElement).innerHTML === colors[correctColorIdx]
    ) {
      setNumCorrect((prevNumCorrect) => prevNumCorrect + 1)
      setColors([generateRandomRGB(), generateRandomRGB(), generateRandomRGB()])
      setCorrectColorIdx(randInt(2))
    } else {
      setNumCorrect(0)
    }
  }

  return (
    <div className="cssgame-container">
      <div
        className="cssgame-color_block"
        style={{ backgroundColor: colors[correctColorIdx] }}
      ></div>
      <div className="cssgame-options">
        {colors.map((color) => {
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
      <div className="cssgame-message">{`${numCorrect} in a row!`}</div>
    </div>
  )
}

export default CssGame
