import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide } from 'three'
import Planet from './Planet'

const PlanetRing = (props) => {
  const { args } = props

  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x = Math.PI / 2))

  return (
    <mesh ref={mesh} position={[0, 0, 0]} visible castShadow>
      <ringGeometry attach="geometry" args={args} />
      <meshBasicMaterial
        side={DoubleSide}
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}

const PlanetAndPath = (props) => {
  const ringArgs = [props.radius - 0.02, props.radius + 0.02, 50]
  return (
    <>
      <Planet
        position={[5, 0, 0]}
        args={[0.5, 16, 16]}
        radius={props.radius}
        offset={props.offset}
      />
      <PlanetRing args={ringArgs} />
    </>
  )
}

export default PlanetAndPath
