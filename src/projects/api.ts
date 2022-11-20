import { ProjectCardProps } from './projects.types'

const urlPrefix =
  'https://raw.githubusercontent.com/SamuelMidgley/portfolio/master/assets/'

const projects: ProjectCardProps[] = [
  {
    title: 'Wordle',
    url: 'projects/wordle',
    summary:
      'Wordle wordle wordle wordle wordle wordle wordle wordle wordle wordle wordle',
    backgroundImage: `url(${urlPrefix}/riddle.jpg)`,
    isLocal: true,
    tags: ['JS', 'React', 'HTML', 'CSS'],
  },
  {
    title: 'Three.js Solar System',
    url: 'threejs-fun',
    summary:
      'A semi accurate model of The Solar System written in Three.js. Repo includes hosted page.',
    backgroundImage: `url(${urlPrefix}/solar.jpg)`,
    isLocal: false,
    tags: ['JS', 'ThreeJs'],
  },
  {
    title: 'RL Trader',
    url: 'rl-trader',
    summary:
      'Different attempts at using Reinforcement Learning to create a trading bot',
    backgroundImage: `url(${urlPrefix}/stonks.jpg)`,
    isLocal: false,
    tags: ['Python', 'ML'],
  },
  {
    title: 'Tic Tac Go',
    url: 'tic-tac-go',
    summary:
      'Tic Tac Toe written in Go! Includes an unbeatable AI using the Minimax algorithm',
    backgroundImage: `url(${urlPrefix}/tictactoe.jpg)`,
    isLocal: false,
    tags: ['Go'],
  },
  {
    title: 'RL Flocking',
    url: 'rl-flocking',
    summary:
      'Using Reinforcement Learning to train an AI sheepdog to herd a flock of sheep',
    backgroundImage: `url(${urlPrefix}/sheepherding.jpg)`,
    isLocal: false,
    tags: ['C#', 'ML'],
  },
  {
    title: 'RecSys for DTI',
    url: 'RecSys-for-DTI',
    summary:
      'Using an ML Recommender System to predict the interactions of drugs and proteins',
    backgroundImage: `url(${urlPrefix}/drugdev.jpg)`,
    isLocal: false,
    tags: ['Python', 'PyTorch'],
  },
  {
    title: 'Riddle MVC',
    url: 'riddle-db',
    summary:
      'A simple CRUD application to store riddles using ASP.NET application with migrations',
    backgroundImage: `url(${urlPrefix}/riddle.jpg)`,
    isLocal: false,
    tags: ['C#', '.NET CORE'],
  },
  {
    title: 'CSS Game',
    url: '/portfolio/games/css-game',
    summary: 'A fun css based color guessing game',
    backgroundImage: `url(${urlPrefix}/css-game.jpg)`,
    isLocal: false,
    tags: ['JS', 'React', 'CSS'],
  },
]

export default projects
