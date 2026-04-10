import { Card } from 'react-bootstrap'
import '../styles/JadeCard.css'

export default function JadeCard({ title, image, grade }) {
  return (
    <Card className="jade-card">
      <div className="jade-card-image-wrapper">
        <Card.Img 
          variant="top" 
          src={image} 
          alt={title}
          className="jade-card-image"
        />
        <div className="jade-card-grade">{grade}</div>
      </div>
      <Card.Body className="jade-card-body">
        <Card.Title className="jade-card-title">{title}</Card.Title>
        <div className="jade-card-footer">
          <button className="jade-card-btn">View Details</button>
        </div>
      </Card.Body>
    </Card>
  )
}
