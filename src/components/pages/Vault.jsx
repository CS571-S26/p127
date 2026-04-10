import JadeCollection from '../JadeCollection'
import '../../styles/Vault.css'

export default function Vault() {
  const jadeItems = [
    {
      id: 1,
      title: 'Imperial Jade Pendant',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      grade: 'Grade A',
    },
    {
      id: 2,
      title: 'Royal Green Bracelet',
      image: 'https://images.unsplash.com/photo-1515562141207-5dff95ffb8fe?w=400&h=400&fit=crop',
      grade: 'Grade A+',
    },
    {
      id: 3,
      title: 'Timeless Jade Ring',
      image: 'https://images.unsplash.com/photo-1599643478521-41ee1d3ffaf5?w=400&h=400&fit=crop',
      grade: 'Grade A',
    },
    {
      id: 4,
      title: 'Emerald Jade Earrings',
      image: 'https://images.unsplash.com/photo-1599643478520-413f8c94baa1?w=400&h=400&fit=crop',
      grade: 'Grade B+',
    },
    {
      id: 5,
      title: 'Celestial Jade Necklace',
      image: 'https://images.unsplash.com/photo-1515377905703-c511b6b891f1?w=400&h=400&fit=crop',
      grade: 'Grade A+',
    },
    {
      id: 6,
      title: 'Heritage Jade Pendant',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      grade: 'Grade A',
    },
  ]

  return (
    <div className="vault-container">
      <section className="vault-header">
        <h1>The Jade Vault</h1>
        <p>Discover our curated collection of premium jade pieces</p>
      </section>

      <JadeCollection items={jadeItems} />
    </div>
  )
}
