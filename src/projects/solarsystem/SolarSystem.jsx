import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import createCamera from './components/camera'
import { FillLight, KeyLight, RimLight } from './components/lights'
import Planet from './components/Planet'
import Sun from './components/Sun'
import './SolarSystem.css'

const PlanetRing = (props) => {
  const { args } = props

  const mesh = useRef()
  // useFrame((state) => (mesh.current.rotation.x = Math.PI / 2))

  return (
    <mesh ref={mesh} position={[0, 0, 0]} visible castShadow>
      <ringGeometry attach="geometry" args={args} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}

const SolarSystem = () => {
  const camera = createCamera()

  return (
    <div className="threejs-scene">
      <Canvas camera={camera}>
        {/* Lights */}
        <KeyLight brightness={5.6} color="#ffbdf4" />
        <FillLight brightness={2.6} color="#bdefff" />
        <RimLight brightness={54} color="#fff" />

        {/* Sun & Planets */}
        <Sun position={[0, 0, 0]} args={[1.5, 16, 16]} />
        <Planet
          position={[5, 0, 0]}
          args={[0.5, 16, 16]}
          radius={3}
          offset={1}
        />
        <PlanetRing args={[2.75, 3.25, 22]} />
        <Planet
          position={[7, 0, 0]}
          args={[0.5, 16, 16]}
          radius={5}
          offset={2}
        />
        <Planet
          position={[9, 0, 0]}
          args={[0.5, 16, 16]}
          radius={7}
          offset={3}
        />
        <Planet
          position={[11, 0, 0]}
          args={[0.5, 16, 16]}
          radius={10}
          offset={4}
        />
      </Canvas>
    </div>
  )
}

export default SolarSystem
