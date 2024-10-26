import './styles.css'
import { useEffect, useState } from 'react'

import {
  Header,
  CardUberona,
  Loading,
  ModalSelectedCity,
} from '../../../components'

import { PencilSimple } from '@phosphor-icons/react'
import { useUberona } from '../../../../hooks/useUberona'

function HandleCards(drivers) {
  if (drivers.length > 0) {
    return drivers.map((driver, index) => (
      <CardUberona
        key={index}
        id={driver.id}
        name={driver.name}
        neighborhood={driver.neighborhood}
        days={driver.availableDays}
      />
    ))
  }

  return (
    <p className="drivers-not-found-message">Nenhum Motorista encontrado.</p>
  )
}

export function Passenger() {
  const { getDrivers } = useUberona()
  const [loading, setLoading] = useState(true)
  const [drivers, setDrivers] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState('Luziânia')

  function updateCity(newCity) {
    setSelectedCity(newCity)
    setOpenModal(false)
  }

  async function listDrivers() {
    try {
      setLoading(true)
      const response = await getDrivers(selectedCity)

      setDrivers(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    listDrivers()
  }, [selectedCity])

  return (
    <>
      <Header title="Passageiro" link="/uberona" />
      <ModalSelectedCity
        optionSelected={selectedCity}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        updateCity={updateCity}
      />

      <div className="passenger-container">
        <div className="city-selected">
          <span>A cidade selecionada foi</span>
          <h1>{selectedCity}</h1>
          <button onClick={() => setOpenModal(true)}>
            <PencilSimple size={16} color="#C4C4CC" />
          </button>
        </div>

        <h2>Caronas Disponíveis</h2>

        <div className="cards-container">
          {loading ? (
            <div className="uberona-loading-container">
              <Loading message="Buscando motoristas." />
            </div>
          ) : (
            HandleCards(drivers)
          )}
        </div>
      </div>
    </>
  )
}
