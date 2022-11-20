import { useEffect, useState } from 'react'
import NewProjectCard from '../components/project-card/NewProjectCard'
import projects from './api'
import FilterIcon from './FilterIcon'
import './Projects.scss'
import { ProjectCardProps } from './projects.types'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardProps[]>(projects)

  function searchChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setSearchTerm(e.currentTarget.value)
  }

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="projects-search">
          <input
            placeholder=""
            value={searchTerm}
            onChange={searchChangeHandler}
          />
          <button type="button">
            <FilterIcon />
          </button>
        </div>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          return (
            <NewProjectCard
              key={(Math.random() * 1000000).toFixed(0)}
              project={project}
            />
          )
        })}
      </div>
    </div>
  )
}
