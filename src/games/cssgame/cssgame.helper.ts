export const randInt = (toNum: number): number => {
  return Math.floor(Math.random() * (toNum + 1))
}

interface RGBVal {
  r: number
  g: number
  b: number
}

const generateRGBVal = (): RGBVal => {
  return {
    r: randInt(255),
    g: randInt(255),
    b: randInt(255),
  }
}

export const generateRandomRGB = (): string => {
  const rgbVals = generateRGBVal()

  return `rgb(${rgbVals.r}, ${rgbVals.g}, ${rgbVals.b})`
}

const singleValToHex = (val: number): string => {
  const hexCodeLetters = ['A', 'B', 'C', 'D', 'E', 'F']

  let hex
  if (val >= 10) {
    hex = hexCodeLetters[val - 10]
  } else {
    hex = `${val}`
  }

  return hex
}

export const valToHex = (val: number): string => {
  // yeah yeah awful naming
  const num = val / 16
  const int = Math.floor(num)

  let firstHex = singleValToHex(int)

  const remainderThingy = Math.floor((num - int) * 16)

  let secondHex = singleValToHex(remainderThingy)

  return `${firstHex}${secondHex}`
}

export const generateHexCode = (): string => {
  const rgbVals = generateRGBVal()

  const hexCode = `#${valToHex(rgbVals.r)}${valToHex(rgbVals.g)}${valToHex(
    rgbVals.b,
  )}`

  return hexCode
}
