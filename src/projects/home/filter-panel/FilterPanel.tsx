import filters from './api'
import SidePanel from '../../../components/side-panel/SidePanel'

import './FilterPanel.scss'
import FilterPanelOptions from './FilterPanelOptions'
import { IFilterState } from './FilterOption'

interface ISidePanel {
  toggle: () => void
  onFilterClick: (filterState: IFilterState) => void
}

export default function FilterPanel(props: ISidePanel) {
  const { toggle, onFilterClick } = props

  return (
    <SidePanel title="Filter Panel" toggle={toggle}>
      {filters.map((filter) => {
        return (
          <FilterPanelOptions
            onFilterClick={onFilterClick}
            key={filter.key}
            filter={filter}
          />
        )
      })}
    </SidePanel>
  )
}
