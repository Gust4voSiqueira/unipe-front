import './style.css'

function HandleButtons(isOnline) {
    const isOnlineButtonClassName = isOnline ? 'header-ifood-button-offline' : 'header-ifood-button-online'
    const isOnlineButtonText = isOnline ? 'Finalizar vendas' : 'Iniciar vendas'

    return (
        <button className={`header-ifood-button ${isOnlineButtonClassName}`}>
            {isOnlineButtonText}                       
        </button>
    )
}

export function HeaderIfood({ title, isOnline }) {
    const isOnlineMessageText = isOnline ? 'online' : 'offline'
    const isOnlineMessageClassName = isOnline ? 'is-online' : 'is-offline'

        return (
                <div className='header-ifood-container'>      
                    <h3 className='header-ifood-title'>{title}</h3>
                    <span className='message-isonline'>Vocé está <span className={isOnlineMessageClassName}>{isOnlineMessageText}</span></span>
                    {HandleButtons(isOnline)}
                </div>
        )
}
