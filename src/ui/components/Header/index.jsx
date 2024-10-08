import './styles.css'
import { useNavigate } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'

export function Header({ title, link }) {
  const navigate = useNavigate()

  return (
    <div className="header-container">
      <button className="header-button" onClick={() => navigate(link || -1)}>
        <CaretLeft size={28} color="#F4F4F4" />
      </button>

      <h1 className="header-title">{title}</h1>

      <div className="div-header"></div>
    </div>
  )
}
