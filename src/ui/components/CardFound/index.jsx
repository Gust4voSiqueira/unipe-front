import { WhatsappLogo } from '@phosphor-icons/react'
import { Trash  } from '@phosphor-icons/react'

import './style.css'

export function CardFound({ title, direction, identifier }) {
  if ( identifier) {
    return (
        <div className="function-items">
        <div className="container-text">
        <p className="items-text">{title}</p>
          <p className="items-direction">{direction}</p>
        </div>
        <a href="" className="a-container" target="_blank" rel="noreferrer">
          <button className="button-icon button-2 ">
            <WhatsappLogo size={32} />
          </button>
        </a>
      </div>

    )
  }

  return (
    <div className="function-items">
      <div className="container-text">
       <p className="items-text">{title}</p>
        <p className="items-direction">{direction}</p>
      </div>
      <a href="" className="a-container" target="_blank" rel="noreferrer">
        <button className="button-icon">
            <Trash size={32} />
        </button>
      </a>
    </div>
  )
}
