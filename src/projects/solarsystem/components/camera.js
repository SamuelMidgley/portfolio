import { PerspectiveCamera, Vector3 } from 'three'

const createCamera = () => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const camera = new PerspectiveCamera(
    100,
    sizes.width / sizes.height,
    0.1,
    100,
  )
  camera.position.x = 8
  camera.position.y = 15
  camera.position.z = 8
  // Point camera towards sun
  camera.lookAt(new Vector3(0, 0, 0))

  return camera
}

export default createCamera
