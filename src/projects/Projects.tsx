// import { useState } from 'react'
import NewProjectCard from '../components/project-card/NewProjectCard'
import projects from './api'
import './Projects.scss'

export default function Projects() {
  // const [searchTerm, setSearchTerm] = useState()

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="projects-search">
          <input placeholder="search" />
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <NewProjectCard
              key={(Math.random() * 1000000).toFixed(0)}
              project={project}
            />
          )
        })}
      </div>
    </div>

    // <div className="grid-container">
    //   {projects.map((project) => {
    //     return (
    //       <ProjectCard
    //         key={(Math.random() * 1000000).toFixed(0)}
    //         title={project.title}
    //         url={project.url}
    //         summary={project.summary}
    //         backgroundImage={project.backgroundImage}
    //         isLocal={project.isLocal}
    //       />
    //     )
    //   })}
    // </div>
  )
}
