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
    key: '2045ffd2-d9ac-4a11-9b87-024d6219a580',
  },
  {
    title: 'Three.js Solar System',
    url: 'threejs-fun',
    summary:
      'A semi accurate model of The Solar System written in Three.js. Repo includes hosted page.',
    backgroundImage: `url(${urlPrefix}/solar.jpg)`,
    isLocal: false,
    tags: ['JS', 'ThreeJs'],
    key: 'ebb84a24-111c-4646-9cdc-097050e71033',
  },
  {
    title: 'RL Trader',
    url: 'rl-trader',
    summary:
      'Different attempts at using Reinforcement Learning to create a trading bot',
    backgroundImage: `url(${urlPrefix}/stonks.jpg)`,
    isLocal: false,
    tags: ['Python', 'ML'],
    key: '147f145c-d82e-4dec-84aa-8ed6c946f5e8',
  },
  {
    title: 'Tic Tac Go',
    url: 'tic-tac-go',
    summary:
      'Tic Tac Toe written in Go! Includes an unbeatable AI using the Minimax algorithm',
    backgroundImage: `url(${urlPrefix}/tictactoe.jpg)`,
    isLocal: false,
    tags: ['Go'],
    key: '58919928-83b2-452e-ba73-e720e59fa741',
  },
  {
    title: 'RL Flocking',
    url: 'rl-flocking',
    summary:
      'Using Reinforcement Learning to train an AI sheepdog to herd a flock of sheep',
    backgroundImage: `url(${urlPrefix}/sheepherding.jpg)`,
    isLocal: false,
    tags: ['C#', 'ML'],
    key: 'c7079a35-03d0-4e3b-a126-5c6ef185cb3a',
  },
  {
    title: 'RecSys for DTI',
    url: 'RecSys-for-DTI',
    summary:
      'Using an ML Recommender System to predict the interactions of drugs and proteins',
    backgroundImage: `url(${urlPrefix}/drugdev.jpg)`,
    isLocal: false,
    tags: ['Python', 'PyTorch'],
    key: 'bc37bf07-1804-4740-aa48-f1d79dd6447c',
  },
  {
    title: 'Riddle MVC',
    url: 'riddle-db',
    summary:
      'A simple CRUD application to store riddles using ASP.NET application with migrations',
    backgroundImage: `url(${urlPrefix}/riddle.jpg)`,
    isLocal: false,
    tags: ['C#', '.NET Core'],
    key: '6f612624-43fb-4965-81f1-332f56bf36ab',
  },
  {
    title: 'CSS Game',
    url: '/portfolio/games/css-game',
    summary: 'A fun css based color guessing game',
    backgroundImage: `url(${urlPrefix}/css-game.jpg)`,
    isLocal: false,
    tags: ['JS', 'React', 'CSS'],
    key: '82a65d47-96cf-466b-8eec-ee0bdb015c1d',
  },
]

export default projects
