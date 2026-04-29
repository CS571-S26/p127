import { Link } from 'react-router-dom'
import '../../styles/SitePages.css'

export default function Accountability() {
  return (
    <main className="site-page accountability-page">
      <section className="page-heading">
        <p className="section-kicker">Accountability</p>
        <h1>Quiet selling needs clear information.</h1>
        <p>
          The platform is designed around slower decisions: material identity, treatment clarity,
          origin context, condition notes, and documented care.
        </p>
      </section>

      <section className="accountability-grid">
        <article>
          <span>01</span>
          <h2>Material first</h2>
          <p>Every product page names jadeite or nephrite before style language.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Treatment notes</h2>
          <p>Dye, polymer, pending review, or untreated status sits directly beside the object.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Documentation</h2>
          <p>Viewing requests create space to share lab notes, condition images, and care details.</p>
        </article>
        <article>
          <span>04</span>
          <h2>No pressure checkout</h2>
          <p>The reserve tray supports conversation before payment or final commitment.</p>
        </article>
      </section>

      <section className="simple-cta">
        <h2>Browse with the notes visible.</h2>
        <Link className="quiet-button primary-action" to="/vault">Open the Vault</Link>
      </section>
    </main>
  )
}
