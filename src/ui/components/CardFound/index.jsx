import { WhatsappLogo, Trash } from '@phosphor-icons/react'

import './style.css'

export function CardFound({
  itemId,
  title,
  direction,
  isAddedByCurrentUser,
  phone,
  removeItem,
}) {
  if (!isAddedByCurrentUser) {
    return (
      <div className="card-found-function-items">
        <div className="container-text">
          <p className="items-text">{title}</p>
          <p className="items-direction">{direction}</p>
        </div>
        <a
          href={`https://wa.me/${phone}`}
          className="a-container"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-icon button-2 ">
            <WhatsappLogo size={24} color="#fff" />
          </button>
        </a>
      </div>
    )
  }

  return (
    <div className="card-found-function-items">
      <div className="container-text">
        <p className="items-text">{title}</p>
        <p className="items-direction">{direction}</p>
      </div>
      <button className="button-icon" onClick={() => removeItem(itemId)}>
        <Trash size={24} color="#fff" />
      </button>
    </div>
  )
}
