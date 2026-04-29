import { Link } from 'react-router-dom'
import Hero from '../Hero.jsx'
import JadeCollection from '../JadeCollection.jsx'
import '../../styles/Home.css'
import { products } from '../../data/products.js'

export default function Home({ reserveTray }) {
  return (
    <>
      <Hero />

      <section className="home-section intro-section" id="provenance">
        <div className="section-kicker">Accountable by design</div>
        <h2>Every piece should feel calm before it feels rare.</h2>
        <p>
          Yu Studios treats jade as a material with memory. Each listing favors plain language,
          clear treatment notes, origin context, and patient inspection over urgency.
        </p>
        <div className="standard-grid">
          <article>
            <span>01</span>
            <h3>Material clarity</h3>
            <p>Natural jadeite or nephrite is named plainly, with treatment status shown before purchase.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Documented origin</h3>
            <p>Origin and studio notes sit beside the object, not hidden behind sales language.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Measured pace</h3>
            <p>Inquiry, appointment, and reserve flows support careful buying decisions.</p>
          </article>
        </div>
      </section>

      <section className="home-section featured-section" id="atelier">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Selected pieces</div>
            <h2>The Quiet Vault</h2>
          </div>
          <p>
            Scroll through six reference objects showing how the marketplace can feel more like a
            private jade room than a conventional shop grid.
          </p>
        </div>
        <div className="scroll-gallery-shell" aria-label="Scrollable selected jade pieces">
          <JadeCollection items={products} variant="scroll" reserveTray={reserveTray} />
        </div>
      </section>

      <section className="home-section appointment-section" id="appointment">
        <div>
          <div className="section-kicker">Private viewing</div>
          <h2>Ask for the full notes before you buy.</h2>
        </div>
        <p>
          A future appointment flow can share additional images, lab documents, condition notes,
          care guidance, and return terms before a buyer commits.
        </p>
        <Link className="quiet-button" to="/appointment">Request Appointment</Link>
      </section>
    </>
  )
}
