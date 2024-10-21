import './style.css'

function HandleButtons({ isOnline, updateStatus }) {
  const isOnlineButtonClassName = isOnline
    ? 'header-ifood-button-offline'
    : 'header-ifood-button-online'
  const isOnlineButtonText = isOnline ? 'Finalizar vendas' : 'Iniciar vendas'

  return (
    <button
      className={`header-ifood-button ${isOnlineButtonClassName}`}
      onClick={updateStatus}
    >
      {isOnlineButtonText}
    </button>
  )
}

export function HeaderIfood({ idFood, title, isOnline, updateStatus }) {
  const isOnlineMessageText = isOnline ? 'online' : 'offline'
  const isOnlineMessageClassName = isOnline ? 'is-online' : 'is-offline'

  return (
    <div className="header-ifood-container">
      <h3 className="header-ifood-title">{title}</h3>
      <span className="message-isonline">
        Vocé está{' '}
        <span className={isOnlineMessageClassName}>{isOnlineMessageText}</span>
      </span>
      <HandleButtons
        isOnline={isOnline}
        updateStatus={() => updateStatus(idFood, !isOnline)}
      />
    </div>
  )
}
