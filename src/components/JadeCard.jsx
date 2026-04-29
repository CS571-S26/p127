import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../styles/JadeCard.css'

export default function JadeCard({ product, isReserved = false, onReserve }) {
  const handleReserve = () => {
    onReserve?.(product.id)
  }

  return (
    <article className="jade-card">
      <Link to={`/piece/${product.id}`} className="jade-card-image-wrapper" aria-label={`View ${product.title}`}>
        <img
          src={product.image}
          alt={product.title}
          className="jade-card-image"
        />
      </Link>
      <div className="jade-card-body">
        <p className="jade-card-material">{product.material}</p>
        <h3 className="jade-card-title">{product.title}</h3>
        <p className="jade-card-note">{product.note}</p>
        <dl className="jade-card-details">
          <div>
            <dt>Origin</dt>
            <dd>{product.origin}</dd>
          </div>
          <div>
            <dt>Treatment</dt>
            <dd>{product.treatment}</dd>
          </div>
        </dl>
        <div className="jade-card-footer">
          <Link to={`/piece/${product.id}`} className="jade-card-link">View Piece</Link>
          <Button type="button" variant="link" className="jade-card-btn" onClick={handleReserve} disabled={isReserved}>
            {isReserved ? 'In Tray' : 'Reserve'}
          </Button>
        </div>
      </div>
    </article>
  )
}
