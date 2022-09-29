export default function Projects() {
  return (
    <div className="grid-container">
      <div className="card" style={{ backgroundImage: "url(img/solar.jfif)" }}>
        <div className="card-content">
          <h2 className="card-title">Three.js Solar System</h2>
          <p className="card-body">
            A <i>(semi)</i> accurate model of The Solar System written in
            Three.js. Repo includes hosted page.
          </p>
          <a
            rel="noreferrer"
            href="https://github.com/SamuelMidgley/threejs-fun"
            target="_blank"
            className="button"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: "url(img/stonks.jpg)" }}>
        <div className="card-content">
          <h2 className="card-title">RL Trader</h2>
          <p className="card-body">
            Different attempts at using Reinforcement Learning to create a
            trading bot
          </p>
          <a
            href="https://github.com/SamuelMidgley/rl-trader"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        className="card"
        style={{ backgroundImage: "url(img/tictactoe.jpg)" }}
      >
        <div className="card-content">
          <h2 className="card-title">Tic Tac Go</h2>
          <p className="card-body">
            Tic Tac Toe written in Go! Includes an unbeatable AI using the
            Minimax algorithm
          </p>
          <a
            href="https://github.com/SamuelMidgley/tic-tac-go"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        className="card"
        style={{ backgroundImage: "url(img/sheepherding.jpg)" }}
      >
        <div className="card-content">
          <h2 className="card-title">RL Flocking</h2>
          <p className="card-body">
            Using Reinforcement Learning to train an AI sheepdog to herd a flock
            of sheep
          </p>
          <a
            href="https://github.com/SamuelMidgley/rl-flocking"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: "url(img/drugdev.jpg)" }}>
        <div className="card-content">
          <h2 className="card-title">RecSys for DTI</h2>
          <p className="card-body">
            Using an ML Recommender System to predict the interactions of drugs
            and proteins
          </p>
          <a
            href="https://github.com/SamuelMidgley/RecSys-for-DTI"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: "url(img/riddle.jpg)" }}>
        <div className="card-content">
          <h2 className="card-title">Riddle MVC</h2>
          <p className="card-body">
            A simple CRUD application to store riddles using ASP.NET application
            with migrations
          </p>
          <a
            href="https://github.com/SamuelMidgley/RecSys-for-DTI"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
