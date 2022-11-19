import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import NewProjectCard from '../../../components/project-card/NewProjectCard'
import { randInt } from '../../../games/cssgame/cssgame.helper'
import { projects } from '../../../projects/api'
import './MiniProject.scss'
import RandomSvg from './RandomSvg'

export default function MiniProject() {
  const [projectIdx, setProjectIdx] = useState([2, 4])
  const projectLength = projects.length - 1
  const navigate = useNavigate()

  function randomHandler() {
    // Make sure both cards are different
    // Make sure either card is different to previous cards
    let prevIdx = projectIdx
    let firstIdx = randInt(projectLength)
    while (prevIdx.includes(firstIdx)) {
      firstIdx = randInt(projectLength)
    }

    prevIdx.push(firstIdx)

    let secondIdx = randInt(projectLength)
    while (prevIdx.includes(secondIdx)) {
      secondIdx = randInt(projectLength)
    }

    const randomIdxs = [firstIdx, secondIdx]
    setProjectIdx(randomIdxs)
  }

  function navigateToProjects() {
    navigate("/portfolio/projects")
  }

  return (
    <section className="mini-projects">
      <div className="header-thingy">
        <h2>Projects</h2>
        <RandomSvg onClickHandler={randomHandler} />
      </div>
      <ul className="showcase">
        {projectIdx.map((idx) => (
          <NewProjectCard key={idx} project={projects[idx]} />
        ))}
      </ul>
      <div className="view-more">
        <Button text="View more" onClickHandler={navigateToProjects} />
      </div>
    </section>
  )
}
