import './styles.css'
import { useState, useEffect } from 'react'
import { Trash, PencilSimple } from '@phosphor-icons/react'

import { Header } from '../../../components/Header'
import { Loading } from '../../../components/Loading'

import { useNavigate } from 'react-router-dom'
import { useUberona } from '../../../../hooks/useUberona'

export function Driver() {
  const navigate = useNavigate()
  const { isExistsCarRegistered } = useUberona()
  const [isExistsCarRegisteredResponse, setIsExistsCarRegisteredResponse] = useState({})

  async function getIsExistsCarRegistered() {
    try {
      const response = await isExistsCarRegistered()

      setIsExistsCarRegisteredResponse(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIsExistsCarRegistered()
  }, [])

  useEffect(() => {
    if (isExistsCarRegisteredResponse.isExistsCarRegistered === false) {
      navigate("/driver/registerNewDriver");
    }
  }, [isExistsCarRegisteredResponse, navigate]);

  if (!isExistsCarRegisteredResponse.isExistsCarRegistered) {
    return (
      <>
        <Header title="Motorista" />
        <Loading message="Carregando..." />
      </>
    );
  }

  return (
    <>
      <Header title="Motorista" />
      <div className='driver-list-cars-container'>
          <div className='driver-list-cars-card'>
            <div>
              <h1>{isExistsCarRegisteredResponse?.car.car}</h1>
              <span>{isExistsCarRegisteredResponse?.car.plate}</span>
              <br />
              <span>{isExistsCarRegisteredResponse?.car.quantityVacancies} vagas</span>
            </div>

            <div className='driver-list-card-buttons-container'>
              <button onClick={() => navigate("")}>
                <PencilSimple size={24} color='#C4C4CC' />
              </button>
              <button>
                <Trash size={24} color='#C4C4CC' />
              </button>
            </div>
          </div>
      </div>
    </>
  )
}
