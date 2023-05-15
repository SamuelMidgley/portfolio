import { useState } from 'preact/hooks'
import ProjectCard from './ProjectCard'
import './Projects.scss'

export interface IProject {
  title: string
  summary: string
  tags: string[]
  imageSrc: string
  imageAlt: string
  imageHeight: number
  link: string
}

import { projects } from './data'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredList, setFilteredList] = useState(projects)

  function handleFilterChange(newFilter: string) {
    setActiveFilter(newFilter)

    if (newFilter === 'All') {
      setFilteredList(projects)
      return
    }

    setFilteredList(
      projects.filter((p) =>
        p.tags.some((t) => {
          if (newFilter === 'React' && t === 'Preact') {
            // Tomatoe Tomato
            return true
          }

          return t === newFilter
        })
      )
    )
  }

  return (
    <section className="projects">
      <div className="projects-side">Projects</div>
      <div className="container">
        <h2 id="projects">Projects.</h2>
        <div className="project-filters">
          <button
            className={`filter_buttons ${
              activeFilter === 'All' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('All')}
          >
            All
          </button>
          <button
            className={`filter_buttons ${
              activeFilter === 'React' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('React')}
          >
            React
          </button>
          <button
            className={`filter_buttons ${
              activeFilter === 'Go' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('Go')}
          >
            Go
          </button>
          <button
            className={`filter_buttons ${
              activeFilter === 'C#' ? 'active' : ''
            }`}
            onClick={() => handleFilterChange('C#')}
          >
            C#
          </button>
        </div>
        <div className="projects-container">
          {filteredList.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
