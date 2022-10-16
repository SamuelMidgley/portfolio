import { useState, useRef, useEffect } from 'react'
import './CssGame.css'
import { generateHexCode, generateRandomRGB, randInt } from './cssgame.helper'

interface CanvasProps {
  backgroundColor: string
}

const Canvas = (props: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current !== null) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      if (context != null) {
        //Our first draw
        context.fillStyle = props.backgroundColor
        context.fillRect(0, 0, 200, 200)
      }
    }
  }, [props.backgroundColor])

  return <canvas height="200px" width="200px" ref={canvasRef} />
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
    const isCorrect =
      (event.target as HTMLButtonElement).innerHTML === colors[correctColorIdx]

    if (numCorrect > 0 && numCorrect % 4 === 0 && isCorrect) {
      // let's spice it up and throw a hex code in there
      setColors([generateHexCode(), generateHexCode(), generateHexCode()])
    } else {
      setColors([generateRandomRGB(), generateRandomRGB(), generateRandomRGB()])
    }

    if (isCorrect) {
      setNumCorrect((prevNumCorrect) => prevNumCorrect + 1)
    } else {
      setNumCorrect(0)
    }

    setCorrectColorIdx(randInt(2))
  }

  return (
    <div className="cssgame-container">
      <div className="cssgame-color_block">
        <Canvas backgroundColor={colors[correctColorIdx]} />
      </div>
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
      {numCorrect > 0 && (
        <div className="cssgame-message">{`${numCorrect} in a row!`}</div>
      )}
    </div>
  )
}

export default CssGame
