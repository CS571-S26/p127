import JadeCard from './JadeCard'
import '../styles/JadeCollection.css'

export default function JadeCollection({ items, variant = 'grid', reserveTray }) {
  return (
    <div className={`jade-collection jade-collection-${variant}`}>
      {items.map((item, index) => (
        <div key={item.id} className={`jade-collection-item item-${index % 3}`}>
          <JadeCard
            product={item}
            isReserved={reserveTray?.isInTray(item.id)}
            onReserve={reserveTray?.addToTray}
          />
        </div>
      ))}
    </div>
  )
}
