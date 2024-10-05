import { CaretRight } from '@phosphor-icons/react'
import './styles.css'
import { Link } from 'react-router-dom'

export function CardHome({ title, image, externalLink, link }) {
  if (externalLink) {
    return (
      <Link className="function-items" to={link}>
        <div className="function-items">
          <div className="text-container">
            <img className="items-img" src={image} alt={title} />
            <p className="items-text">{title}</p>
          </div>
          <button className="button-icon">
            <CaretRight size={30} color="#fff" />
          </button>
        </div>
      </Link>
    )
  }

  return (
    <div className="function-items">
      <div className="text-container">
        <img className="items-img" src={image} alt={title} />
        <p className="items-text">{title}</p>
      </div>

      <a href={link} className="a-container" target="_blank" rel="noreferrer">
        <button className="button-icon">
          <CaretRight size={30} color="#fff" />
        </button>
      </a>
    </div>
  )
}
