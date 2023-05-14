import { GitHubIcon, LinkedInIcon } from '../../../../icons'
import './Header.css'
import './Header.scss'

export default function Header() {
  return (
    <section className="header">
      <div className="swirls">
        <h1 className="title">@SamMidgley</h1>
      </div>
      <div className="bio">
        <span>Full-stack software engineer</span>
      </div>

      <div className="icons">
        <a
          className="header-icon github-icon"
          href="https://github.com/SamuelMidgley"
        >
          <GitHubIcon />
        </a>
        <a
          className="header-icon linkedin-icon"
          href="https://www.linkedin.com/in/samuelmidgley/"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* <div className="read-more">
        <div className="read-more-mover" />
      </div>
      <div className="read-more-text">Scroll down to see more</div> */}
    </section>
  )
}
