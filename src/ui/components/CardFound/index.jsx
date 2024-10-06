import { WhatsappLogo } from '@phosphor-icons/react'
import { Trash  } from '@phosphor-icons/react'

import './style.css'

export function CardFound({ title, direction, identifier }) {
  if ( identifier) {
    return (
        <div className="card-found-function-items">
        <div className="container-text">
        <p className="items-text">{title}</p>
          <p className="items-direction">{direction}</p>
        </div>
        <a href="" className="a-container" target="_blank" rel="noreferrer">
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
      <a href="" className="a-container" target="_blank" rel="noreferrer">
        <button className="button-icon">
            <Trash size={24} color="#fff" />
        </button>
      </a>
    </div>
  )
}
