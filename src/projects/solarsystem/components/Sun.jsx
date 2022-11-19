import { useRef } from 'react'

const Sun = (props) => {
  // TODO : Sort out typescript
  // eslint-disable-next-line react/prop-types
  const { position, args } = props

  const mesh = useRef()

  return (
    <mesh position={position} ref={mesh} visible userData={{ test: 'hello' }}>
      <sphereGeometry attach="geometry" args={args} />
      <meshBasicMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}

export default Sun
