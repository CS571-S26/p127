import { useMemo, useState } from 'react'
import JadeCollection from '../JadeCollection'
import '../../styles/Vault.css'
import { products } from '../../data/products.js'

const filters = ['All objects', 'Jadeite', 'Nephrite', 'Untreated']

export default function Vault({ reserveTray }) {
  const [activeFilter, setActiveFilter] = useState('All objects')
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      const matchesFilter = activeFilter === 'All objects'
        || product.materialType === activeFilter
        || product.treatment.toLowerCase().includes(activeFilter.toLowerCase())

      const searchableText = [
        product.title,
        product.material,
        product.category,
        product.origin,
        product.treatment,
      ].join(' ').toLowerCase()

      return matchesFilter && searchableText.includes(normalizedQuery)
    })
  }, [activeFilter, query])

  return (
    <main className="vault-container">
      <section className="vault-header">
        <span>The Jade Vault</span>
        <h1>The quiet collection</h1>
        <p>
          A minimalist reference for browsing jade through material, origin, treatment,
          and condition notes before any purchase conversation begins.
        </p>
        <div className="vault-controls">
          <label className="vault-search">
            <span>Search collection</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pendant, jadeite, untreated..."
            />
          </label>
        </div>
        <div className="vault-filters" aria-label="Collection filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {filteredItems.length > 0 ? (
        <JadeCollection items={filteredItems} reserveTray={reserveTray} />
      ) : (
        <section className="empty-state">
          <h2>No pieces found</h2>
          <p>Try a different material, treatment note, or object name.</p>
          <button onClick={() => {
            setActiveFilter('All objects')
            setQuery('')
          }}>
            Clear filters
          </button>
        </section>
      )}
    </main>
  )
}
