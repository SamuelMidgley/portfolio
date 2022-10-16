import { useState, useRef } from 'react'
import { Mesh } from 'three'
import { Canvas } from '@react-three/fiber'
import './CssGame.css'
import { generateHexCode, generateRandomRGB, randInt } from './cssgame.helper'

const Box = (props: any) => {
  const { color } = props
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()
  // Rotate mesh every frame, this is outside of React without overhead

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[5, 5, 5]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
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
        <Canvas>
          <ambientLight />
          <Box color={colors[correctColorIdx]} />
        </Canvas>
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
