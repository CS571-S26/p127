import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { getProductById } from '../../data/products.js'
import '../../styles/SitePages.css'

export default function ProductDetail({ reserveTray }) {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId)

  if (!product) {
    return (
      <main className="site-page simple-page">
        <p className="section-kicker">Piece unavailable</p>
        <h1>We could not find that jade object.</h1>
        <Link className="quiet-button" to="/vault">Return to Vault</Link>
      </main>
    )
  }

  const isReserved = reserveTray.isInTray(product.id)

  const handleReserve = () => {
    reserveTray.addToTray(product.id)
  }

  const handleViewing = () => {
    reserveTray.addToTray(product.id)
    navigate(`/appointment?piece=${product.id}`)
  }

  return (
    <main className="site-page product-page">
      <section className="product-detail">
        <div className="product-image-panel">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-copy">
          <p className="section-kicker">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="product-lede">{product.story}</p>

          <div className="product-actions">
            <Button type="button" variant="link" className="quiet-button primary-action" onClick={handleReserve} disabled={isReserved}>
              {isReserved ? 'In Reserve Tray' : 'Add to Reserve Tray'}
            </Button>
            <Button type="button" variant="link" className="quiet-button" onClick={handleViewing}>
              Request Viewing
            </Button>
          </div>

          <dl className="product-specs">
            <div>
              <dt>Material</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>Origin</dt>
              <dd>{product.origin}</dd>
            </div>
            <div>
              <dt>Treatment</dt>
              <dd>{product.treatment}</dd>
            </div>
            <div>
              <dt>Dimensions</dt>
              <dd>{product.dimensions}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{product.status}</dd>
            </div>
            <div>
              <dt>Documentation</dt>
              <dd>{product.certificate}</dd>
            </div>
          </dl>

        </div>
      </section>

      <section className="detail-band">
        <article>
          <span>Care</span>
          <p>{product.care}</p>
        </article>
        <article>
          <span>Accountability</span>
          <p>All final sale conversations should include treatment notes, condition images, and return terms.</p>
        </article>
      </section>
    </main>
  )
}
