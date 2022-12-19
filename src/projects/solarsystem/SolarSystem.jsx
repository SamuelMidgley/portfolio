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
        <div>
          <div className="content-title">ThreeJS meets the Solar System</div>
          <p>Hello</p>
          <a href="https://www.solarsystemscope.com/textures/">
            Link to Textures
          </a>
        </div>
        <div className="solar-system-links">
          <div className="links-title">Links</div>
          <a
            className="icon-link"
            href="https://github.com/SamuelMidgley/threejs-fun"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-github-original" />
            <div>GitHub Repo</div>
          </a>
          <a
            className="icon-link"
            href="https://samuelmidgley.github.io/threejs-fun/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-github-original" />
            <div>GitHub Pages</div>
          </a>
        </div>
      </div>
    </>
  )
}

export default SolarSystem
