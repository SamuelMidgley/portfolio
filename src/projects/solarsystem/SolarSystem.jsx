import { Canvas } from '@react-three/fiber'
import createCamera from './components/camera'
import PlanetAndPath from './components/PlanetAndPath'
import Sun from './components/Sun'
import './SolarSystem.scss'

const SolarSystem = () => {
  const camera = createCamera()

  return (
    <>
      <div className="solar-system-scene">
        <Canvas camera={camera}>
          {/* Light */}
          <pointLight brightness={10} color="#fff" position={[0, 0, 0]} />

          {/* Sun & Planets */}
          <Sun position={[0, 0, 0]} args={[1.5, 16, 16]} />
          <PlanetAndPath radius={3} offset={2} />
          <PlanetAndPath radius={7} offset={1} />
          <PlanetAndPath radius={10} offset={0.7} />
          <PlanetAndPath radius={15} offset={0.3} />
        </Canvas>
      </div>
      <div className="solar-system-title">
        <div>The Solar System</div>
      </div>
      <div className="solar-system-content">
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </>
  )
}

export default SolarSystem
