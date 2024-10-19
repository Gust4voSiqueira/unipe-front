import './styles.css'
import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Header } from '../../../components/Header'
import { PencilSimple } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalSelectedCity } from '../../../components/Modal'

const createDriverFormSchema = z.object({
    neighborhood: z.string().min(5),
    car: z.string().min(5),
    plate: z.string().min(5)
  });

export function Driver() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(createDriverFormSchema),
      })
    const [openModal, setOpenModal] = useState(false)
    const [selectedCity, setSelectedCity] = useState("Luziânia")

    function updateCity(newCity) {
        setSelectedCity(newCity)
        setOpenModal(false)
    }
    
    async function handleCreateDriver(driver) {
        try {
          
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <>
            <Header title="Motorista" />
            <ModalSelectedCity
                optionSelected={selectedCity}
                open={openModal}
                handleClose={() => setOpenModal(false)}
                updateCity={updateCity}
            />

            <div className='driver-container'>
                <div className="city-selected">
                    <span>A cidade selecionada foi</span>
                    <h1>{selectedCity}</h1>
                    <button onClick={() => setOpenModal(true)}>
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
                        // className={isErrorInput('')}
                    />

                    <span>Modelo do carro</span>
                    <input
                        type="text"
                        {...register('car')}
                        // className={isErrorInput('')}
                    />

                    <span>Placa</span>
                    <input
                        type="text"
                        {...register('plate')}
                        // className={isErrorInput('')}
                    />
                </form>
            </div>
        </>
    )
}