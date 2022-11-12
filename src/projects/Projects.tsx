import { projects } from './api'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <div className="grid-container">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={(Math.random() * 1000000).toFixed(0)}
            title={project.title}
            url={project.url}
            summary={project.summary}
            backgroundImage={project.backgroundImage}
            isLocal={project.isLocal}
          />
        )
      })}
    </div>
  )
}
