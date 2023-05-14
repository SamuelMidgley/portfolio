import ProjectCard from './ProjectCard'
import './Projects.scss'

export interface IProject {
  title: string
  summary: string
  tags: string[]
  imageSrc: string
  imageAlt: string
  imageHeight: number
}

import { projects } from './data'

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-side">Projects</div>
      <div className="container">
        <h2 id="projects">Projects.</h2>
        <div className="project-filters">
          <button className="filter_buttons">All</button>
          <button className="filter_buttons">React</button>
          <button className="filter_buttons">Go</button>
          <button className="filter_buttons">C#</button>
        </div>
        <div className="projects-container">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
