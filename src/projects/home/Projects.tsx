import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import projects from './api'
import FilterIcon from './FilterIcon'
import { ProjectCardProps } from './projects.types'
import FilterPanel from './filter-panel/FilterPanel'
import { IFilterState } from './filter-panel/FilterOption'
import NewProjectCard from '../../components/project-card/NewProjectCard'
import './Projects.scss'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [showFilterPanel, setShowFilterPanel] = useState<boolean>(false)
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectCardProps[]>(projects)
  const [filterList, setFilterList] = useState<string[]>([])
  const location = useLocation()

  // const { optionalFilter } = props

  // Search
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

  // Filters
  // Handle optional filter options
  useEffect(() => {
    const optionalFilter = (location.state as any)?.filter
    if (optionalFilter) {
      setFilterList([optionalFilter])
    }
  }, [location])

  // Show / Hide panel
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

  // Handle Filters
  const onFilterClick = useCallback((filterState: IFilterState) => {
    setFilterList((prevFilterList) => {
      let newFilteredList = [...prevFilterList]

      if (prevFilterList.includes(filterState.name)) {
        if (!filterState.state) {
          newFilteredList = newFilteredList.filter((filterItem) => {
            return filterItem !== filterState.name
          })
        }
      } else if (filterState.state) {
        newFilteredList.push(filterState.name)
      }

      return newFilteredList
    })
  }, [])

  function handleFilterChange(
    projectList: ProjectCardProps[],
    listToFilter: string[]
  ): ProjectCardProps[] {
    const filteredList = projectList.filter((proj) => {
      return proj.tags.some((tag) => listToFilter.includes(tag))
    })

    return filteredList
  }

  function clearFilters() {
    const emptyList: string[] = []
    setFilterList(emptyList)
  }

  useEffect(() => {
    if (filterList.length === 0) {
      setFilteredProjects(projects)
    } else {
      const newFilteredProjects = handleFilterChange(projects, filterList)
      setFilteredProjects(newFilteredProjects)
    }
  }, [filterList])

  return (
    <>
      {showFilterPanel && (
        <FilterPanel
          filterList={filterList}
          onFilterClick={onFilterClick}
          toggle={toggleFilterPanel}
        />
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
          {filterList.length > 0 && (
            <div className="clear-filters">
              <div>Clear Filters</div>
              <button type="button" onClick={clearFilters}>
                x
              </button>
            </div>
          )}
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
