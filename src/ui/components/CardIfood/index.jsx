import { WhatsappLogo } from '@phosphor-icons/react'

import './style.css'

export function CardIfood({ title, dais, status }) {
  let claStatus
  let textStatus
  if (status) {
    claStatus = 'ifood-status-prin ifood-status1'
    textStatus = 'online'
  } else {
    claStatus = 'ifood-status-prin ifood-status2'
    textStatus = 'offline'
  }
  return (
    <div className="card-ifood-function-items">
      <div className="container-text">
        <p className="items-text">{title}</p>
        <p className="items-dais">Dias disp: {dais}</p>
        <div className="items-dais items-status">
          <p>{textStatus}</p>
          <div className={claStatus}></div>
        </div>
      </div>
      <a href="" className="a-container" target="_blank" rel="noreferrer">
        <button className="button-icon button-2 ">
          <WhatsappLogo size={32} />
        </button>
      </a>
    </div>
  )
}
