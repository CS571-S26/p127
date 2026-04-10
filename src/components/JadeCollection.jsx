import JadeCard from './JadeCard'
import '../styles/JadeCollection.css'

export default function JadeCollection({ items }) {
  return (
    <div className="jade-collection">
      {items.map((item, index) => (
        <div key={item.id} className={`jade-collection-item item-${index % 3}`}>
          <JadeCard
            title={item.title}
            image={item.image}
            grade={item.grade}
          />
        </div>
      ))}
    </div>
  )
}