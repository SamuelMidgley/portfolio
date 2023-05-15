import { IProject } from './Projects'
import toDoImage from '../../../../assets/to-do.png'
import solarSystemImage from '../../../../assets/solar-system.png'
import flockingImage from '../../../../assets/flocking.png'
import ticTacGoImage from '../../../../assets/tic-tac-go.png'
import rlTraderImage from '../../../../assets/rl-trader.png'
import recSysImage from '../../../../assets/recsys-dti.png'
import wordleImage from '../../../../assets/wordle.png'
import cssGameImage from '../../../../assets/css-game.png'

export const projects: IProject[] = [
  {
    title: 'To Do app',
    summary: 'A to do app written in Preact with Supabase as the backend',
    tags: ['Preact', 'Supabase', 'CSS'],
    imageSrc: toDoImage,
    imageAlt: 'Screenshot of to do app',
    imageHeight: 250,
    link: 'https://github.com/SamuelMidgley/to-do',
  },
  {
    title: 'Solar System',
    summary: 'A ThreeJS simulation of the Solar System using realistic maps',
    tags: ['JavaScript', 'ThreeJS'],
    imageSrc: solarSystemImage,
    imageAlt: 'Screenshot of Solar System simulation',
    imageHeight: 297,
    link: 'https://github.com/SamuelMidgley/threejs-fun',
  },
  {
    title: 'Tic Tac Go',
    summary:
      'A console Tic Tac Toe application written in Go! Includes an unbeatable AI using the Minimax algorithm',
    tags: ['Go'],
    imageSrc: ticTacGoImage,
    imageAlt: 'Screenshot of Tic Tac Go game',
    imageHeight: 390,
    link: 'https://github.com/SamuelMidgley/tic-tac-go',
  },
  {
    title: 'RecSys For DTI',
    summary:
      'Using an ML Recommender System to predict the interactions of drugs and proteins',
    tags: ['Python', 'PyTorch'],
    imageSrc: recSysImage,
    imageAlt: 'Screenshot of ...',
    imageHeight: 235,
    link: 'https://github.com/SamuelMidgley/RecSys-for-DTI',
  },
  {
    title: 'Reinforcement Learning Flocking',
    summary:
      'Using Reinforcement Learning to train an AI sheepdog to herd a flock of sheep',
    tags: ['C#', 'Unity', 'ML Agents'],
    imageSrc: flockingImage,
    imageAlt: 'Screenshot of training footage',
    imageHeight: 257,
    link: 'https://github.com/SamuelMidgley/rl-flocking',
  },
  {
    title: 'RL-Trader',
    summary:
      'Different attempts at using Reinforcement Learning to create a trading bot',
    tags: ['Python'],
    imageSrc: rlTraderImage,
    imageAlt: 'Screenshot of ...',
    imageHeight: 312,
    link: 'https://github.com/SamuelMidgley/rl-trader',
  },
  {
    title: 'Wordle clone',
    summary: 'A Worlde clone created in React',
    tags: ['React'],
    imageSrc: wordleImage,
    imageAlt: 'Screenshot of ...',
    imageHeight: 432,
    link: 'https://samuelmidgley.github.io/portfolio-old/#/projects/wordle',
  },
  {
    title: 'CSS Game',
    summary: 'A truly innovative color guessing game',
    tags: ['React'],
    imageSrc: cssGameImage,
    imageAlt: 'Screenshot of ...',
    imageHeight: 358,
    link: 'https://samuelmidgley.github.io/portfolio-old/#/projects/css-game',
  },
]
