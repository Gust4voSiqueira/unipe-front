import { Trash, WhatsappLogo } from '@phosphor-icons/react'

import './style.css'

function HandleDays({ days }) {
  return days.map((day, index) => (
    <span key={index} className="card-ifood-days">
      {day.slice(0, 3)}
      {index < days.length - 1 ? ', ' : ''}
    </span>
  ))
}

function HandleButtons({ isAddedByCurrentUser, removeItem, phone }) {
  if (isAddedByCurrentUser) {
    return (
      <button
        className="card-ifood-button-icon"
        onClick={removeItem}
      >
        <Trash size={24} color="#fff" />
      </button>
    )
  }

  return (
    <a
      href={`https://wa.me/${phone}`}
      className="card-ifood-whatsapp-container"
      target="_blank"
      rel="noreferrer"
    >
      <button className="card-ifood-button-icon button-whatsapp">
        <WhatsappLogo size={24} color="#fff" />
      </button>
    </a>
  )
}

export function CardIfood({
  id,
  title,
  days,
  status,
  isAddedByCurrentUser,
  phone,
  deleteProduct
}) {
  const claStatus = status
    ? 'ifood-status-prin ifood-status1'
    : 'ifood-status-prin ifood-status2'
  const textStatus = status ? 'Online' : 'Offline'

  return (
    <div className="card-ifood-container">
      <div className="container-text">
        <p className="card-ifood-title-product">{title}</p>
        <p className="card-ifood-days">
          Dias disp.: <HandleDays days={days} />
        </p>
        <div className="card-ifood-status">
          <p>{textStatus}</p>
          <div className={claStatus}></div>
        </div>
      </div>
      <HandleButtons
        isAddedByCurrentUser={isAddedByCurrentUser}
        removeItem={() => deleteProduct(id)}
        phone={phone}
      />
    </div>
  )
}
