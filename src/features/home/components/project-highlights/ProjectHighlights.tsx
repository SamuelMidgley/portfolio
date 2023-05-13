import HighlightCard from './HighlightCard'
import './ProjectHighlights.scss'

export interface Project {
  title: string
  desc: string
  stack: string[]
  imageUrl: string
  imageAlt: string
}

const projects: Project[] = [
  {
    title: 'CSS Game',
    desc: 'A "fun" color guessing game',
    stack: ['React'],
    imageUrl: '/src/assets/css-game.jpg',
    imageAlt: 'CSS Logo',
  },
]

export default function ProjectHighlights() {
  return (
    <div>
      {projects.map((proj) => (
        <HighlightCard key={proj.title} project={proj} />
      ))}
    </div>
  )
}
