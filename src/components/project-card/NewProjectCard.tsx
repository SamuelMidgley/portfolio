import Tags from './components/Tags'
import './NewProjectCard.scss'

export default function NewProjectCard(props: any) {
  const exampleProject = props.project
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
      <Tags tags={exampleProject.tags}></Tags>
    </div>
  )
}
