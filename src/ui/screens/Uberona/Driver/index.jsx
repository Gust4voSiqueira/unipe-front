import './styles.css'
import { useEffect, useContext } from 'react'
import { Trash, PencilSimple } from '@phosphor-icons/react'

import { Header } from '../../../components'
import { Loading } from '../../../screens'

import { useNavigate } from 'react-router-dom'
import { DriverContext } from '../../../../contexts/DriverContext'
import { useUberona } from '../../../../hooks/useUberona'

export function Driver() {
  const navigate = useNavigate()
  const { deleteDriver, isExistsCarRegistered } = useUberona()
  const { driver, addDriver, removeDriver } = useContext(DriverContext)

  async function getIsExistsCarRegistered() {
    try {
      const response = await isExistsCarRegistered()

      addDriver(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteDriver(motoristId) {
    try {
      await deleteDriver(motoristId)
      removeDriver()
      navigate('/uberona')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIsExistsCarRegistered()
  }, [])

  useEffect(() => {
    if (
      driver !== null &&
      driver !== undefined &&
      !driver.isExistsCarRegistered
    ) {
      navigate('/driver/registerNewDriver')
    }
  }, [driver, navigate])

  if (!driver?.isExistsCarRegistered) {
    return <Loading />
  }

  return (
    <>
      <Header title="Motorista" link="/uberona" />
      <div className="driver-list-cars-container">
        <div className="driver-list-cars-card">
          <div>
            <h1>{driver?.car.car}</h1>
            <span>{driver?.car.plate}</span>
            <br />
            <span>{driver?.car.quantityVacancies} vagas</span>
          </div>

          <div className="driver-list-card-buttons-container">
            <button onClick={() => navigate('/driver/registerNewDriver')}>
              <PencilSimple weight="fill" size={24} color="#C4C4CC" />
            </button>
            <button onClick={() => handleDeleteDriver(driver?.car.id)}>
              <Trash weight="fill" size={24} color="#C4C4CC" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
