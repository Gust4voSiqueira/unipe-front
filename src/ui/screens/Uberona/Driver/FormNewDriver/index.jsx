import './styles.css'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState, useCallback, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, ModalSelectedCity } from '../../../../components'
import { PencilSimple } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControlLabel, Checkbox } from '@mui/material'
import { useUberona } from '../../../../../hooks/useUberona'
import { isErrorInput } from '../../../../../utils/isErrorInput'
import { DAYS_OF_WEEK } from '../../../../../utils/const'

import { DriverContext } from '../../../../../contexts/DriverContext'
import { Loading } from '../../../Loading'

const createDriverFormSchema = z.object({
  neighborhood: z.string().min(5, 'O bairro deve ter no mínimo 5 caracteres.'),
  car: z.string().min(5, 'O modelo do carro deve ter no mínimo 5 caracteres.'),
  quantityVacancies: z.string().min(1, 'A quantidade de vagas é obrigatória.'),
  plate: z.string().min(5, 'A placa deve ter no mínimo 5 caracteres.'),
  observation: z.string().optional(),
})

export function FormNewDriver() {
  const navigate = useNavigate()
  const { driver, addDriver } = useContext(DriverContext)

  const { createNewDriver, isExistsCarRegistered, editDriver } = useUberona()
  const [openModal, setOpenModal] = useState(false)
  const [selectedCity, setSelectedCity] = useState(
    driver?.isExistsCarRegistered ? [...driver?.car?.city] : 'Luziânia',
  )
  const [selectedDays, setSelectedDays] = useState(
    driver?.isExistsCarRegistered ? [...driver?.car?.availableDays] : [],
  )

  async function getIsExistsCarRegistered() {
    try {
      const response = await isExistsCarRegistered()

      addDriver(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIsExistsCarRegistered()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(createDriverFormSchema),
  })

  useEffect(() => {
    if (driver?.car) {
      setValue('neighborhood', driver.car.neighborhood)
      setValue('car', driver.car.car)
      setValue('quantityVacancies', String(driver.car.quantityVacancies))
      setValue('plate', driver.car.plate)
      setValue('observation', driver.car.observation)

      setSelectedCity(driver.car.city)
      setSelectedDays(driver.car.availableDays)
    }
  }, [driver, setValue])

  const handleDayChange = useCallback((day, checked) => {
    setSelectedDays((prevSelectedDays) =>
      checked
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day],
    )
  }, [])

  const updateCity = useCallback((newCity) => {
    setSelectedCity(newCity)
    setOpenModal(false)
  }, [])

  const handleCreateDriver = async (driverData) => {
    if (!selectedCity) return

    const newDriver = {
      ...driverData,
      quantityVacancies: Number(driverData.quantityVacancies),
      days: selectedDays,
      city: selectedCity,
    }

    try {
      driver.isExistsCarRegistered
        ? await editDriver(driver.car.id, newDriver)
        : await createNewDriver(newDriver)

      navigate('/uberona')
    } catch (error) {
      console.log(error)
    }
  }

  if (!driver) {
    return <Loading />
  }

  return (
    <>
      <Header title="Motorista" link="/uberona" />
      <ModalSelectedCity
        optionSelected={selectedCity}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        updateCity={updateCity}
      />

      <div className="driver-container">
        <div className="city-selected">
          <span>A cidade selecionada foi</span>
          <h1>{selectedCity}</h1>
          <button onClick={() => setOpenModal(true)} aria-label="Editar cidade">
            <PencilSimple size={16} color="#C4C4CC" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateDriver)}
          className="form-register-driver-container"
        >
          <span>Bairro</span>
          <input
            type="text"
            {...register('neighborhood')}
            className={isErrorInput(errors, 'neighborhood')}
            aria-invalid={errors.neighborhood ? 'true' : 'false'}
          />

          <span>Modelo do carro</span>
          <input
            type="text"
            {...register('car')}
            className={isErrorInput(errors, 'car')}
            aria-invalid={errors.car ? 'true' : 'false'}
          />

          <span>Placa</span>
          <input
            type="text"
            {...register('plate')}
            className={isErrorInput(errors, 'plate')}
            aria-invalid={errors.plate ? 'true' : 'false'}
          />

          <span>Quantidade de vagas</span>
          <input
            type="number"
            {...register('quantityVacancies')}
            className={isErrorInput(errors, 'quantityVacancies')}
            aria-invalid={errors.quantityVacancies ? 'true' : 'false'}
          />

          <span>Observações</span>
          <input
            type="text"
            {...register('observation')}
            className={isErrorInput(errors, 'observation')}
            aria-invalid={errors.observation ? 'true' : 'false'}
          />

          <span>Dias Disponíveis</span>
          <div className="driver-select-days-container">
            {DAYS_OF_WEEK.map((day) => (
              <label key={day.value} className="driver-select-days-label">
                <div />
                <FormControlLabel
                  labelPlacement="start"
                  label={day.label}
                  control={<Checkbox color="success" />}
                  checked={selectedDays.includes(day.value)}
                  onChange={() =>
                    handleDayChange(day.value, selectedDays.includes(day.value))
                  }
                />
              </label>
            ))}
          </div>

          <button className="driver-button" type="submit">
            <span>Salvar informações</span>
          </button>
        </form>
      </div>
    </>
  )
}
