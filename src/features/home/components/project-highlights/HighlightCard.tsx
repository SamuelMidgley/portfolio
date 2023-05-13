import { Project } from './ProjectHighlights'

interface HighlightCardProps {
  project: Project
}

export default function HighlightCard(props: HighlightCardProps) {
  const { title, desc, stack, imageUrl, imageAlt } = props.project

  return (
    <div className="highlight-card">
      <img className="highlight-image" src={imageUrl} alt={imageAlt} />
      <div className="highlight-content">
        <h3 className="highlight-title">{title}</h3>
        <p className="highlight-desc">{desc}</p>
        <div className="highlight-stack">
          {stack.map((tech) => (
            <div className="highlight-tech" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
