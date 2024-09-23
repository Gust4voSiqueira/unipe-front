import './styles.css'

import Logo from '../../../assets/Logo.png'

export function Loading() {
    return (
        <div className='loading-container'>
            <img src={Logo} alt="Logo da aplicação" />
        </div>
    )
}