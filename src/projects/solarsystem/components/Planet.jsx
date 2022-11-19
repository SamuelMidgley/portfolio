import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Planet = (props) => {
  // eslint-disable-next-line react/prop-types
  const { position, args, radius, offset } = props

  const mesh = useRef()
  useFrame((state) => {
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

export default Planet
