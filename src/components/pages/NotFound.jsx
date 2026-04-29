import { Link } from 'react-router-dom'
import '../../styles/SitePages.css'

export default function NotFound() {
  return (
    <main className="site-page simple-page">
      <p className="section-kicker">Not found</p>
      <h1>This room is closed.</h1>
      <p>The page you are looking for is not part of the current collection.</p>
      <Link className="quiet-button primary-action" to="/">Return Home</Link>
    </main>
  )
}
