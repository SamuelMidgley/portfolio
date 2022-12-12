import { IFilter } from './api'
import FilterOption, { IFilterState } from './FilterOption'

interface IFilterPanelOptions {
  filter: IFilter
  filterList: string[]
  onFilterClick: (filterState: IFilterState) => void
}

export default function FilterPanelOptions(props: IFilterPanelOptions) {
  const { filter, filterList, onFilterClick } = props

  return (
    <>
      <div className="options-title">{filter.name}</div>

      {filter.options.map((option) => {
        return (
          <FilterOption
            onFilterClick={onFilterClick}
            key={option}
            name={option}
            filterList={filterList}
          />
        )
      })}
    </>
  )
}
