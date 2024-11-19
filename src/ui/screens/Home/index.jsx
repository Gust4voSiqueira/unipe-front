import './styles.css'
import Logo from '../../../assets/logo-small.svg'

import { SignOut } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'

import { useUser } from '../../../hooks/useUser'
import { TokenContext } from '../../../contexts/TokenContext'
import { Carousel, CardHome } from '../../components'
import { Loading } from '../Loading'

import UberonaIcon from '../../../assets/uberona-icon.png'
import AvaNeadIcon from '../../../assets/nead-icon.png'
import VirtualClassIcon from '../../../assets/virtualclass-icon.svg'
import IfoodIcon from '../../../assets/ifood-icon.png'
import MapIcon from '../../../assets/map-icon.png'
import CalendarIcon from '../../../assets/calendar-icon.png'
import LostIcon from '../../../assets/lost-icon.png'
import PetsIcon from '../../../assets/pets-icon.png'
import MentoringIcon from '../../../assets/mentoring-icon.png'
import { useUberona } from '../../../hooks/useUberona'
import { DriverContext } from '../../../contexts/DriverContext'

export function Home() {
  const [user, setUser] = useState({})
  const { isExistsCarRegistered } = useUberona()
  const { removeToken } = useContext(TokenContext)
  const { addDriver, removeDriver } = useContext(DriverContext)
  const { myUser } = useUser()

  function handleLoggout() {
    removeDriver()
    removeToken()
  }

  async function getMyUser() {
    try {
      const response = await myUser()

      setUser(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMyUser()
  }, [])

  if (!user.name) return <Loading />

  return (
    <div className="home-comtainer">
      <header className="header-home-container">
        <div className="header-home-image-info-user">
          <img src={Logo} alt="Logo da aplicação" />
          <div className="header-home-info-user">
            <p>Olá, {user.name?.split(' ')[0]}!</p>
            <span>{user.dateNow}</span>
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
          link="/uberona"
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
          link="/ifood"
        />
        <CardHome
          title="MAPA DE SALAS"
          image={MapIcon}
          externalLink={false}
          link="/room"
        />
        <CardHome
          title="CALENDÁRIO ACADÊMICO"
          image={CalendarIcon}
          externalLink={false}
          link="/calendar"
        />
        <CardHome
          title="ACHADOS E PERDIDOS"
          image={LostIcon}
          externalLink={false}
          link="/lostAndFound"
        />
        <CardHome
          title="DOAÇÃO DE PETS"
          image={PetsIcon}
          externalLink={false}
          link="/pets"
        />
        <CardHome
          title="MENTORIAS"
          image={MentoringIcon}
          externalLink={false}
          link="/mentoring"
        />
      </div>
    </div>
  )
}
