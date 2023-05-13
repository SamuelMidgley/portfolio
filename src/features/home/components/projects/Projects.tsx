import ProjectCard from './ProjectCard'
import './Projects.scss'

export interface IProject {
  title: string
  summary: string
  tags: string[]
  imageSrc: string
  imageAlt: string
  imageHeight: number
}

const projects: IProject[] = [
  {
    title: 'To Do app',
    summary: 'A to do app written in Preact with Supabase as the backend',
    tags: ['Preact', 'Supabase', 'CSS'],
    imageSrc: '/src/assets/to-do.png',
    imageAlt: 'Screenshot of to do app',
    imageHeight: 250,
  },
  {
    title: 'Solar System',
    summary: 'A ThreeJS simulation of the Solar System using realistic maps',
    tags: ['JavaScript', 'ThreeJS'],
    imageSrc: '/src/assets/solar-system.png',
    imageAlt: 'Screenshot of Solar System simulation',
    imageHeight: 297,
  },
  {
    title: 'Tic Tac Go',
    summary:
      'A console Tic Tac Toe application written in Go! Includes an unbeatable AI using the Minimax algorithm',
    tags: ['Go'],
    imageSrc: '/src/assets/tic-tac-go.png',
    imageAlt: 'Screenshot of Tic Tac Go game',
    imageHeight: 390,
  },
  {
    title: 'RecSys For DTI',
    summary:
      'Using an ML Recommender System to predict the interactions of drugs and proteins',
    tags: ['Python', 'PyTorch'],
    imageSrc: '',
    imageAlt: 'YEAH NOT SURE TBH',
    imageHeight: 300,
  },
  {
    title: 'Reinforcement Learning Flocking',
    summary:
      'Using Reinforcement Learning to train an AI sheepdog to herd a flock of sheep',
    tags: ['C#', 'Unity', 'ML Agents'],
    imageSrc: '/src/assets/flocking.png',
    imageAlt: 'Screenshot of training footage',
    imageHeight: 257,
  },
  {
    title: 'RL-Trader',
    summary:
      'Different attempts at using Reinforcement Learning to create a trading bot',
    tags: ['Python'],
    imageSrc: '',
    imageAlt: 'YEAH NOT SURE TBH',
    imageHeight: 300,
  },
]

export default function Projects() {
  return (
    <div>
      <h2 id="projects">Projects.</h2>
      <div className="project-filters">
        <button className="filter_buttons">All</button>
        <button className="filter_buttons">React</button>
        <button className="filter_buttons">Go</button>
        <button className="filter_buttons">C#</button>
      </div>
      <div className="projects-container">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
