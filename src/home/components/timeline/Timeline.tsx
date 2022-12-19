import { TIMELINE_CONTENT, TimelineCardProps } from './api'
import './Timeline.scss'

function TimelineCard(props: TimelineCardProps) {
  const { title, summary, time } = props

  return (
    <div className="timeline-card">
      <div className="time-part">
        <div className="time">{time}</div>
      </div>
      <div className="card-info">
        <div className="timeline-title">{title}</div>
        <div className="timeline-summary">{summary}</div>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section className="timeline">
      <h2>Timeline</h2>
      <div className="timeline-block">
        <div className="line" />
        <div className="info">
          {TIMELINE_CONTENT.map((timeline_item) => (
            <TimelineCard
              key={timeline_item.key}
              title={timeline_item.title}
              summary={timeline_item.summary}
              time={timeline_item.time}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
