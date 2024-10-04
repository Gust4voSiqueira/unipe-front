import './styles.css'
import Logo from '../../../assets/logo-small.svg'

import { SignOut } from '@phosphor-icons/react'
import { useContext } from 'react'
import { TokenContext } from '../../../contexts/TokenContext'
import { Carousel } from '../../components/Carousel'
import { CardHome } from '../../components/CardHome'

import UberonaIcon from '../../../assets/uberona-icon.svg'
import AvaNeadIcon from '../../../assets/nead-icon.svg'
import VirtualClassIcon from '../../../assets/virtualclass-icon.svg'
import IfoodIcon from '../../../assets/ifood-icon.svg'
import MapIcon from '../../../assets/map-icon.svg'
import CalendarIcon from '../../../assets/calendar-icon.svg'
import LostIcon from '../../../assets/lost-icon.svg'
import PetsIcon from '../../../assets/pets-icon.svg'
import MentoringIcon from '../../../assets/mentoring-icon.svg'

export function Home() {
  const { removeToken } = useContext(TokenContext)

  function handleLoggout() {
    removeToken()
  }

  return (
    <div className="home-comtainer">
      <header className="header-home-container">
        <div className="header-home-image-info-user">
          <img src={Logo} alt="Logo da aplicação" />
          <div className="header-home-info-user">
            <p>Olá, Nome do Usuário!</p>
            <span>23 Set, 2024</span>
          </div>
        </div>

        <button onClick={handleLoggout}>
          <SignOut size={32} color="#E1E1E6" />
        </button>
      </header>

      <div className="div-carousel">
        <Carousel />
      </div>

      <h3 className="titulo-p">Atalhos</h3>

      <div className="div-functions">
        <CardHome
          title="UBERONA"
          image={UberonaIcon}
          externalLink={false}
          link=""
        />
        <CardHome
          title="AVA NEAD"
          image={AvaNeadIcon}
          externalLink={true}
          link="https://ava.digitalcsc.com.br/"
        />
        <CardHome
          title="VIRTUAL CLASS"
          image={VirtualClassIcon}
          externalLink={true}
          link="https://appunidesc.virtualclass.com.br/"
        />
        <CardHome
          title="IFOOD UNIDESC"
          image={IfoodIcon}
          externalLink={false}
          link=""
        />
        <CardHome
          title="MAPA DE SALAS"
          image={MapIcon}
          externalLink={false}
          link="/roomMap"
        />
        <CardHome
          title="CALENDÁRIO ACADÊMICO"
          image={CalendarIcon}
          externalLink={false}
          link="/academicCalendar"
        />
        <CardHome
          title="ACHADOS E PERDIDOS"
          image={LostIcon}
          externalLink={false}
          link=""
        />
        <CardHome
          title="DOAÇÃO DE PETS"
          image={PetsIcon}
          externalLink={false}
          link=""
        />
        <CardHome
          title="MENTORIAS"
          image={MentoringIcon}
          externalLink={false}
          link=""
        />
      </div>
    </div>
  )
}
