import { useCallback, useEffect, useState } from 'react'
import NewProjectCard from '../../components/project-card/NewProjectCard'
import projects from './api'
import FilterIcon from './FilterIcon'
import FilterPanel from './filter-panel/FilterPanel'
import './Projects.scss'
import { ProjectCardProps } from './projects.types'
import { IFilterState } from './filter-panel/FilterOption'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardProps[]>(projects)
  const [showFilterPanel, setShowFilterPanel] = useState<boolean>(false)
  const [filterList, setFilterList] = useState<string[]>([])

  function searchChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setSearchTerm(e.currentTarget.value)
  }

  function handleFilterChange(
    projectList: ProjectCardProps[],
    listToFilter: string[]
  ): ProjectCardProps[] {
    const filteredList = projectList.filter(() => {
      const isValid = projectList.some((proj) =>
        listToFilter.includes(proj.title)
      )
      if (isValid) {
        return false
      }
      return true
    })

    return filteredList
  }

  const toggleFilterPanel = useCallback(() => {
    const contentElement = document.getElementById('content')
    const rootElement = document.querySelector('body')
    if (contentElement === null || rootElement === null) return

    if (showFilterPanel) {
      contentElement.style.filter = ''
      rootElement.style.overflow = 'hidden auto'
    } else {
      contentElement.style.filter = 'blur(5px)'
      rootElement.style.overflow = 'hidden'
    }

    setShowFilterPanel((prevState) => !prevState)
  }, [showFilterPanel])

  const onFilterClick = useCallback((filterState: IFilterState) => {
    setFilterList((prevFilterList) => {
      const newFilteredList = [...prevFilterList]

      if (prevFilterList.includes(filterState.name)) {
        if (!filterState.state) {
          newFilteredList.filter((filterItem) => {
            return filterItem !== filterState.name
          })
        }
      } else if (filterState.state) {
        newFilteredList.push(filterState.name)
      }

      return newFilteredList
    })
  }, [])

  useEffect(() => {
    setFilteredProjects(
      projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  useEffect(() => {
    setFilteredProjects((prevFilteredProject) => {
      return handleFilterChange(prevFilteredProject, filterList)
    })
  }, [filterList])

  return (
    <>
      {showFilterPanel && (
        <FilterPanel onFilterClick={onFilterClick} toggle={toggleFilterPanel} />
      )}
      <div className="projects">
        <div className="projects-header">
          <h1>Projects</h1>
          <div className="projects-search">
            <input
              placeholder=""
              value={searchTerm}
              onChange={searchChangeHandler}
            />
            <button type="button" onClick={toggleFilterPanel}>
              <FilterIcon />
            </button>
          </div>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            return <NewProjectCard key={project.key} project={project} />
          })}
        </div>
      </div>
    </>
  )
}
