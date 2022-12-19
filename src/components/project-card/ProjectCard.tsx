import { ProjectCardProps } from '../../projects/home/projects.types'
import Tags from './components/Tags'
import './ProjectCard.scss'

interface NewProjectCarProps {
  project: ProjectCardProps
}

export default function NewProjectCard(props: NewProjectCarProps) {
  const { project } = props

  return (
    <li className="project-card">
      <a title={project.title} href={project.url}>
        <div
          className="image"
          style={{ backgroundImage: project.backgroundImage }}
        />
      </a>
      <div className="text-content">
        <div className="title">{project.title}</div>
        <div className="summary">{project.summary}</div>
      </div>
      <Tags tags={project.tags} />
    </li>
  )
}
