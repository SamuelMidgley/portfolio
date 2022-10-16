import { Link } from 'react-router-dom'
import './Games.css'

const Games = () => {
  return (
    <div className="games-menu">
      <Link to={`/portfolio/games/cssgame`}>
        <div className="button">CSS Game</div>
      </Link>
      <Link to={`/portfolio/games/flocking`}>
        <div className="button">WIP</div>
      </Link>
      <Link to={`/portfolio/games/solarsystem`}>
        <div className="button">Solar System</div>
      </Link>
    </div>
  )
}

export default Games
