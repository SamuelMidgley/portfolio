import './ProjectCard.scss'
import { IProject } from './Projects'

interface IProjectCard {
  project: IProject
}

export default function ProjectCard(props: IProjectCard) {
  const { title, summary, tags, imageSrc, imageAlt, imageHeight, link } =
    props.project

  console.log(link)

  return (
    <a href={link}>
      <div className="project-card" style={{ height: `${imageHeight}px` }}>
        <img className="project-card_image" src={imageSrc} alt={imageAlt} />
        <div className="project-card_container">
          <h3 className="project-card_title">{title}</h3>
          <div className="project-card_summary">{summary}</div>
          <div className="project-card_tag-container">
            {tags.map((t) => (
              <div class="project-card_tag" key={t}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}
