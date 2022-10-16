import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { PerspectiveCamera, Vector3 } from 'three'
import './SolarSystem.css'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const camera = new PerspectiveCamera(100, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 8
camera.position.y = 15
camera.position.z = 8
// Point camera towards sun
camera.lookAt(new Vector3(0, 0, 0))

// Lights
const KeyLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  )
}
const FillLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  )
}
const RimLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  )
}

// Geometry
const GroundPlane = () => {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

const BackDrop = () => {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

const orbit = (planet, radius, speed, elapsedTime, offset) => {
  planet.position.x = radius * Math.cos(offset + elapsedTime / speed)
  planet.position.z = radius * Math.sin(offset + elapsedTime / speed)
}

const Sphere = (props) => {
  const { position, args, radius } = props

  const mesh = useRef()
  useFrame((state) => {
    let offset = 1
    mesh.current.position.x =
      radius * Math.cos((offset * state.clock.elapsedTime) / 2)
    mesh.current.position.z =
      radius * Math.sin((offset * state.clock.elapsedTime) / 2)
  })

  return (
    <mesh
      position={position}
      ref={mesh}
      visible
      userData={{ test: 'hello' }}
      castShadow
    >
      <sphereGeometry attach="geometry" args={args} />
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
  return (
    <div className="threejs-scene">
      <Canvas camera={camera}>
        <KeyLight brightness={5.6} color="#ffbdf4" />
        <FillLight brightness={2.6} color="#bdefff" />
        <RimLight brightness={54} color="#fff" />
        <Sphere position={[2, 0, 0]} args={[0.5, 16, 16]} radius={1} />
        <Sphere position={[5, 0, 0]} args={[0.5, 16, 16]} radius={4} />
      </Canvas>
    </div>
  )
}

export default SolarSystem
