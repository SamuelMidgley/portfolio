import './About.scss'

export default function About() {
  return (
    <section className="about">
      <div className="about-side">About me</div>
      <div className="container">
        <h2 id="about">About me.</h2>
        <div className="about-details">
          <ul className="about-list">
            <li className="about-item">
              <h3>
                Full stack engineer -{' '}
                <a
                  href="https://www.interactsoftware.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Interact Software
                </a>
              </h3>
              <p className="time-period">2022-present</p>
              <p>
                I have been working at Interact for 16 months. During this time
                I have worked with a wide range of technologies, these include;
                .NET Framework, React, Vue.js, SQL Server. Here are some of the
                projects I've worked on during my time at Interact:
              </p>
              <ul className="std-list">
                <li>
                  Integrated OpenAI into our content creation system powered by
                  React.
                </li>
                <li>
                  Extensive work on the{' '}
                  <a href="https://www.interactsoftware.com/features/personas/">
                    Personas
                  </a>{' '}
                  feature including a UI overhaul and significant changes to the
                  back end to support complex groups.
                </li>
                <li>
                  Part of the team that developed our content creation system{' '}
                  <a href="https://www.interactsoftware.com/features/cms-pages/">
                    Block Editor
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li class="about-item">
              <h3>
                Data Analytics MSc -{' '}
                <a
                  href="https://www.sheffield.ac.uk/postgraduate/taught/courses/2023/data-analytics-msc"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of Sheffield
                </a>
              </h3>
              <p className="time-period">2020-2021</p>
              <ul className="std-list">
                <li>
                  Instrumental in completing a group competition run by
                  AstraZeneca to create a Matrix Factorisation model with the
                  aim of solving the Drug-Target Interaction problem. This
                  involved weekly progress meetings, report and a final
                  presentation to Bino John of AstraZeneca.
                </li>
                <li>
                  Completed a dissertation to simulate sheep herding using Craig
                  Reynolds' flocking algorithm to model the movement of a flock
                  of sheep and Reinforcement Learning to train the sheepdog.
                </li>
              </ul>
            </li>
            <li class="about-item">
              <h3>
                Physics BSc -{' '}
                <a
                  href="https://www.sheffield.ac.uk/physics"
                  target="_blank"
                  rel="noreferrer"
                >
                  University of Sheffield
                </a>
              </h3>
              <p className="time-period">2017-2020</p>
              <ul className="std-list">
                <li>
                  Completed both the Programming in Python and Advanced
                  Programming in Python modules with the latter culminating in
                  the construction of a neural network for classifying neutrino
                  interactions.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
