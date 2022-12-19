import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button/Button'
import ProjectCard from '../../../components/project-card/ProjectCard'
import projects from '../../../projects/home/api'
import './MiniProject.scss'
import RandomSvg from './RandomSvg'
import { randInt } from '../../../projects/cssgame/cssgame.helper'

export default function MiniProject() {
  const [projectIdx, setProjectIdx] = useState([0, 7])
  const projectLength = projects.length - 1
  const navigate = useNavigate()

  const randomHandler = useCallback(() => {
    // Make sure both cards are different
    // Make sure either card is different to previous cards
    const prevIdx = projectIdx
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
  }, [projectIdx, projectLength])

  const navigateToProjects = useCallback(() => {
    navigate('/portfolio/projects')
  }, [navigate])

  return (
    <section className="mini-projects">
      <div className="header-thingy">
        <h2>Projects</h2>
        <RandomSvg onClickHandler={randomHandler} />
      </div>
      <ul className="showcase">
        {projectIdx.map((idx) => (
          <ProjectCard key={idx} project={projects[idx]} />
        ))}
      </ul>
      <div className="view-more">
        <Button text="View more" onClickHandler={navigateToProjects} />
      </div>
    </section>
  )
}
