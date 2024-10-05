import './styles.css'
import { useEffect, useState } from 'react'

import { Header } from '../../../components/Header'
import { CardUberona } from '../../../components/CardUberona'

import { PencilSimple } from '@phosphor-icons/react'
import { useUberona } from '../../../../hooks/useUberona'

function HandleCards(drivers) {
    if(drivers.length > 0) {
        return drivers.map((driver, index) => <CardUberona key={index} name={driver.name} neighborhood={driver.neighborhood} days={driver.availableDays} />)
    }

    return <p className='drivers-not-found-message'>Nenhum Motorista encontrado.</p>
}

export function Passenger() {
    const { getDrivers } = useUberona()
    const [ loading, setLoading ] = useState(true)
    const [ drivers, setDrivers ] = useState([])

    async function listDrivers() {
        try {
            const response = await getDrivers()

            setDrivers(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        listDrivers()
    }, [])

    return (
        <>
            <Header title="Passageiro" />

            <div className='passenger-container'>
                <div className='city-selected'>
                    <span>A cidade selecionada foi</span>
                    <h1>Cidade Ocidental</h1>
                    <button>
                        <PencilSimple size={16} color='#C4C4CC' />
                    </button>
                </div>

                <h2>Caronas Disponíveis</h2>

                <div className='cards-container'>
                    { loading ? (
                        <div class="loader-container">
                        <div class="loader" />
                        <p>Buscando Motoristas</p>
                    </div>
                    ) : HandleCards(drivers)}
                </div>
            </div>
        </>
    )
}