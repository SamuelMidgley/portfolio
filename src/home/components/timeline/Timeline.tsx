import { TIMELINE_CONTENT, TimelineCardProps } from './api'
import { randInt } from '../../../games/cssgame/cssgame.helper'
import './Timeline.scss'

function TimelineCard(props: TimelineCardProps) {
  return (
    <div className="timeline-card">
      <div className="time-part">
        <div className="time">{props.time}</div>
      </div>
      <div className="card-info">
        <div className="title">{props.title}</div>
        <div className="summary">{props.summary}</div>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <div className="timeline-block">
        <div className="line"></div>
        <div className="info">
          {TIMELINE_CONTENT.map((timeline_item) => (
            <TimelineCard
              key={randInt(100000)}
              title={timeline_item.title}
              summary={timeline_item.summary}
              time={timeline_item.time}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
