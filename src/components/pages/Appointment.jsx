import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { getProductById, products } from '../../data/products.js'
import '../../styles/SitePages.css'

export default function Appointment({ reserveTray }) {
  const [searchParams] = useSearchParams()
  const requestedPiece = getProductById(searchParams.get('piece'))
  const trayProducts = products.filter((product) => reserveTray.trayIds.includes(product.id))
  const initialPieceIds = requestedPiece ? [requestedPiece.id] : trayProducts.map((product) => product.id)
  const [selectedIds, setSelectedIds] = useState(initialPieceIds)
  const [form, setForm] = useState({
    name: '',
    email: '',
    preference: 'Studio viewing',
    note: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const selectedProducts = useMemo(() => (
    products.filter((product) => selectedIds.includes(product.id))
  ), [selectedIds])

  const togglePiece = (productId) => {
    setSelectedIds((current) => (
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="site-page appointment-page">
      <section className="page-heading">
        <p className="section-kicker">Private viewing</p>
        <h1>Request the full notes.</h1>
        <p>
          Choose the pieces you want to discuss and prepare a viewing request with your contact details.
        </p>
      </section>

      <Form className="appointment-form" onSubmit={handleSubmit}>
        <section className="form-panel">
          <h2>Pieces</h2>
          <div className="piece-checklist">
            {products.map((product) => (
              <Form.Check
                key={product.id}
                id={`piece-${product.id}`}
                type="checkbox"
                label={product.title}
                checked={selectedIds.includes(product.id)}
                onChange={() => togglePiece(product.id)}
              />
            ))}
          </div>
        </section>

        <section className="form-panel">
          <h2>Contact</h2>
          <Form.Group controlId="appointment-name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="appointment-email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="appointment-preference">
            <Form.Label>Viewing preference</Form.Label>
            <Form.Select
              value={form.preference}
              onChange={(event) => setForm({ ...form, preference: event.target.value })}
            >
              <option>Studio viewing</option>
              <option>Virtual viewing</option>
              <option>Documentation only</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="appointment-note">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              value={form.note}
              onChange={(event) => setForm({ ...form, note: event.target.value })}
              placeholder="Questions about origin, treatment, sizing, or care."
            />
          </Form.Group>
          <Button className="quiet-button primary-action" variant="link" type="submit" disabled={selectedProducts.length === 0}>
            Prepare Request
          </Button>
          {submitted && (
            <div className="form-confirmation" role="status">
              Request prepared for {selectedProducts.length} {selectedProducts.length === 1 ? 'piece' : 'pieces'}.
            </div>
          )}
        </section>
      </Form>
    </main>
  )
}
