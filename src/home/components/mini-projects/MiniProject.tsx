import { useState } from 'react'
import NewProjectCard from '../../../components/project-card/NewProjectCard'
import { randInt } from '../../../games/cssgame/cssgame.helper'
import { projects } from '../../../projects/api'
import './MiniProject.scss'

export default function MiniProject() {
  const [projectIdx, setProjectIdx] = useState([2, 4])
  const projectLength = projects.length - 1

  function clickHandler() {
    // Make sure both cards are different
    // Make sure either card is different to previous cards
    let firstIdx = randInt(projectLength)
    let prevIdx = [...projectIdx, firstIdx]
    let secondIdx = randInt(projectLength)
    while (prevIdx.includes(secondIdx)) {
      secondIdx = randInt(projectLength)
    }
    const randomIdxs = [firstIdx, secondIdx]
    setProjectIdx(randomIdxs)
  }

  return (
    <section className="mini-projects">
      <div className="header-thingy">
        <h2>Projects</h2>
        <button onClick={clickHandler}>Rando</button>
      </div>
      <ul className="showcase">
        {projectIdx.map((idx) => (
          <NewProjectCard key={idx} project={projects[idx]} />
        ))}
        {/* <NewProjectCard project={projects[2]} />
        <NewProjectCard project={projects[4]} /> */}
      </ul>
      <div className="view-more">
        <button>View more</button>
      </div>
    </section>
  )
}
