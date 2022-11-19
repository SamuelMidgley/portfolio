import { ProjectCardProps } from '../../projects/projects.types'
import Tags from './components/Tags'
import './NewProjectCard.scss'

interface NewProjectCarProps {
  project: ProjectCardProps
}

export default function NewProjectCard(props: NewProjectCarProps) {
  const { project } = props
  const exampleProject = project
  return (
    <div className="project-card">
      <div
        className="image"
        style={{ backgroundImage: exampleProject.backgroundImage }}
      />
      <div className="text-content">
        <div className="title">{exampleProject.title}</div>
        <div className="summary">{exampleProject.summary}</div>
      </div>
      <Tags tags={exampleProject.tags} />
    </div>
  )
}
