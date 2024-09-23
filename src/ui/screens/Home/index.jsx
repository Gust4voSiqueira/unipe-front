import './styles.css'
import Logo from '../../../assets/logo-small.svg'

import { SignOut } from '@phosphor-icons/react'
import { useContext } from 'react'
import { TokenContext } from '../../../contexts/TokenContext'

export function Home() {
    const { removeToken } = useContext(TokenContext)
    
    function handleLoggout() {
        removeToken()
    }

    return (    
    <div  className='home-comtainer'>
        <header className='header-home-container'>
            <div className='header-home-image-info-user'>
                <img src={Logo} alt="Logo da aplicação" />
                <div className='header-home-info-user'>
                    <p>Olá, Nome do Usuário!</p>
                    <span>23 Set, 2024</span>
                </div>
            </div>

            <button onClick={handleLoggout}>
                <SignOut size={32} color='#E1E1E6' />
            </button>
        </header>
    
        </div>
    )
}
