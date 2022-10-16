import { render, screen } from '@testing-library/react'
import App from '../../App'

// Have to render whole app to check nav bar due to react router
test('renders nav bar', () => {
  render(<App />)
  const HomeLink = screen.getByText(/Home/i)
  expect(HomeLink).toBeInTheDocument()

  const ProjectsLink = screen.getByText(/Projects/i)
  expect(ProjectsLink).toBeInTheDocument()

  const GamesLink = screen.getByText(/Games/i)
  expect(GamesLink).toBeInTheDocument()
})
