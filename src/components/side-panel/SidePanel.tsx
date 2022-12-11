import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import CrossIcon from './CrossIcon'
import './SidePanel.scss'

interface ISidePanel {
  title: string
  toggle: () => void
  children: React.ReactNode
}

export default function SidePanel(props: ISidePanel) {
  const { title, toggle, children } = props
  const sidePanelNode = document.getElementById('side-panel') as HTMLElement

  return ReactDOM.createPortal(
    <>
      <div className="side-panel">
        <div className="filter-close">
          <button type="button" onClick={toggle}>
            <CrossIcon />
          </button>
        </div>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
      <div className="filler" onClick={toggle} />
    </>,
    sidePanelNode
  )
}
