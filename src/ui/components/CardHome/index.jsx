import { CaretRight } from '@phosphor-icons/react'
import './styles.css'
import { Link } from 'react-router-dom'

export function CardHome({ title, image, externalLink, link }) {
  if (!externalLink) {
    return (
      <div className="card-home-container">
        <div className="text-container">
          <img className="items-img" src={image} alt={title} />
          <p className="items-text">{title}</p>
        </div>
        <Link to={link}>
          <button className="card-home-button-icon">
            <CaretRight size={30} color="#fff" />
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="card-home-container">
      <div className="text-container">
        <img className="items-img" src={image} alt={title} />
        <p className="items-text">{title}</p>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <button className="card-home-button-icon">
          <CaretRight size={30} color="#fff" />
        </button>
      </a>
    </div>
  )
}
