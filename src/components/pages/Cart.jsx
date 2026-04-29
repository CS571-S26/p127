import { Link } from 'react-router-dom'
import { products } from '../../data/products.js'
import '../../styles/SitePages.css'

export default function Cart({ reserveTray }) {
  const reservedProducts = products.filter((product) => reserveTray.trayIds.includes(product.id))

  return (
    <main className="site-page tray-page">
      <section className="page-heading">
        <p className="section-kicker">Reserve tray</p>
        <h1>Your viewing list</h1>
        <p>
          Keep pieces here while you compare material notes and prepare a private viewing request.
        </p>
      </section>

      {reservedProducts.length > 0 ? (
        <>
          <div className="tray-list">
            {reservedProducts.map((product) => (
              <article className="tray-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div>
                  <p>{product.material}</p>
                  <h2>{product.title}</h2>
                  <span>{product.status}</span>
                </div>
                <div className="tray-actions">
                  <Link to={`/piece/${product.id}`}>View</Link>
                  <button onClick={() => reserveTray.removeFromTray(product.id)}>Remove</button>
                </div>
              </article>
            ))}
          </div>

          <section className="tray-summary">
            <p>{reservedProducts.length} {reservedProducts.length === 1 ? 'piece' : 'pieces'} selected</p>
            <div>
              <Link className="quiet-button primary-action" to="/appointment">Request Viewing</Link>
              <button className="quiet-button" onClick={reserveTray.clearTray}>Clear Tray</button>
            </div>
          </section>
        </>
      ) : (
        <section className="empty-state">
          <h2>Your tray is quiet.</h2>
          <p>Add a jade object from the Vault when you are ready to compare notes.</p>
          <Link className="quiet-button primary-action" to="/vault">Browse Vault</Link>
        </section>
      )}
    </main>
  )
}
