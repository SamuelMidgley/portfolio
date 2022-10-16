import { Canvas } from '@react-three/fiber'
import createCamera from './components/camera'
import { FillLight, KeyLight, RimLight } from './components/lights'
import Planet from './components/Planet'
import './SolarSystem.css'

const camera = createCamera()

const SolarSystem = () => {
  return (
    <div className="threejs-scene">
      <Canvas camera={camera}>
        <KeyLight brightness={5.6} color="#ffbdf4" />
        <FillLight brightness={2.6} color="#bdefff" />
        <RimLight brightness={54} color="#fff" />
        <Planet position={[2, 0, 0]} args={[0.5, 16, 16]} radius={1} />
        <Planet position={[5, 0, 0]} args={[0.5, 16, 16]} radius={4} />
      </Canvas>
    </div>
  )
}

export default SolarSystem
