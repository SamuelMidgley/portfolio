import { useNavigate } from 'react-router-dom'

import './Skills.scss'

interface SkillIconProps {
  name: string
  deviconName: string
}

function SkillIcon(props: SkillIconProps) {
  const navigate = useNavigate()

  function onClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const filter = (e.target as HTMLButtonElement).title
    navigate('/portfolio/projects', { state: { filter } })
  }

  const { name, deviconName } = props

  return (
    <button title={name} type="button" onClick={onClickHandler}>
      <i title={name} className={`devicon-${deviconName}`} />
    </button>
  )
}

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-icons">
        <SkillIcon name="HTML" deviconName="html5-plain" />
        <SkillIcon name="CSS" deviconName="css3-plain" />
        <SkillIcon name="CSS" deviconName="sass-original" />
      </div>
      <div className="skill-icons">
        <SkillIcon name="JS" deviconName="javascript-plain" />
        <SkillIcon name="React" deviconName="react-original" />
        <SkillIcon name="React" deviconName="redux-original" />
        <SkillIcon name="ThreeJs" deviconName="threejs-original" />
      </div>
      <div className="skill-icons">
        <SkillIcon name="C#" deviconName="csharp-plain" />
        <SkillIcon name=".NET Core" deviconName="dotnetcore-plain" />
        <SkillIcon name="Python" deviconName="python-plain" />
        <SkillIcon name="PyTorch" deviconName="pytorch-plain" />
        <SkillIcon name="Go" deviconName="go-original-wordmark" />
      </div>
    </section>
  )
}
