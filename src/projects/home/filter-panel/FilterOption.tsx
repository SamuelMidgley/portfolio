import React, { useCallback, useState } from 'react'

interface IFilterOption {
  name: string
  filterList: string[]
  onFilterClick: (filterState: IFilterState) => void
}

export interface IFilterState {
  name: string
  state: boolean
}

export default function FilterOption(props: IFilterOption) {
  const { name, filterList, onFilterClick } = props
  const [checkState, setCheckState] = useState(filterList.includes(name))

  const filterOptionClick = useCallback(
    (e: React.FormEvent) => {
      const filterState: IFilterState = {
        name: (e.currentTarget as HTMLInputElement).value,
        state: !checkState,
      }
      onFilterClick(filterState)
      setCheckState((prevCheckState) => !prevCheckState)
    },
    [checkState, onFilterClick]
  )

  return (
    <div className="option">
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={name}
          checked={checkState}
          onChange={filterOptionClick}
        />
        {name}
      </label>
    </div>
  )
}
