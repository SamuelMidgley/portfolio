import './Skills.scss'

interface SkillIconProps {
  name: string
}

function SkillIcon(props: SkillIconProps) {
  // Ideally make these clickable that takes you to the project page using that filter
  // Might need redux set up

  return (
    <div>
      <i className={`devicon-${props.name}`}></i>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-icons">
        <SkillIcon name="html5-plain" />
        <SkillIcon name="css3-plain" />
        <SkillIcon name="sass-original" />
      </div>
      <div className="skill-icons">
        <SkillIcon name="javascript-plain" />
        <SkillIcon name="react-original" />
        <SkillIcon name="redux-original" />
        <SkillIcon name="threejs-original" />
      </div>
      <div className="skill-icons">
        <SkillIcon name="csharp-plain" />
        <SkillIcon name="dotnetcore-plain" />
        <SkillIcon name="python-plain" />
        <SkillIcon name="pytorch-plain" />
        <SkillIcon name="go-original-wordmark" />
      </div>
    </div>
  )
}
