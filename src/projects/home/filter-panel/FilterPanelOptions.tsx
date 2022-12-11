import { IFilter } from './api'
import FilterOption, { IFilterState } from './FilterOption'

interface IFilterPanelOptions {
  // name: string
  // filterOptions: string[]
  filter: IFilter
  onFilterClick: (filterState: IFilterState) => void
}

export default function FilterPanelOptions(props: IFilterPanelOptions) {
  const { filter, onFilterClick } = props

  return (
    <>
      <div className="options-title">{filter.name}</div>

      {filter.options.map((option) => {
        return (
          <FilterOption
            onFilterClick={onFilterClick}
            key={option}
            name={option}
          />
        )
      })}
    </>
  )
}
