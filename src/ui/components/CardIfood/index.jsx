import { WhatsappLogo } from '@phosphor-icons/react'

import './style.css'

export function CardIfood({ title, dais, status }) {
  const claStatus = status ? 'ifood-status-prin ifood-status1':'ifood-status-prin ifood-status2';
  const textStatus = status ? 'online':'offline';

  return (
    <div className="card-ifood-container">
      <div className="container-text">
        <p className="card-ifood-title">{title}</p>
        <p className="card-ifood-dais">Dias disp: {dais}</p>
        <div className="card-ifood-status">
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
