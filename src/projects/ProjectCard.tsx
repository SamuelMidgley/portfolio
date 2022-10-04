import { Link } from "react-router-dom";
import { ProjectCardProps } from "./projects.types";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="card" style={{ backgroundImage: props.backgroundImage }}>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-body">{props.summary}</p>
        {props.isLocal ? (
          <Link to={`/portfolio/${props.url}`}>
            <div className="button">Learn More</div>
          </Link>
        ) : (
          <a
            rel="noreferrer"
            href={`https://github.com/SamuelMidgley/${props.url}`}
            target="_blank"
            className="button"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
