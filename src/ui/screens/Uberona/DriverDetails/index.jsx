import './styles.css'
import { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom';
import { Header } from '../../../components/Header'
import { useUberona } from '../../../../hooks/useUberona';
import { CardDriverDetails } from '../../../components/CardDriverDetails';
import { TokenContext } from '../../../../contexts/TokenContext';
import { Loading } from '../../../components/Loading';

function HandleCardsDetailsDriver(driver) {
    if(driver) {
        return (
            <>
                <CardDriverDetails field="Veículo" data={driver.car} />
                <CardDriverDetails field="Placa" data={driver.plate} />
                <CardDriverDetails field="Bairro" data={driver.neighborhood} />
                <CardDriverDetails field="Dias disponível" data={driver.availableDays?.map((day, index) => <>{day.slice(0, 3)}{index < driver.availableDays.length - 1 ? ', ' : ''}</>)} />
                <CardDriverDetails field="Quant. de vagas" data={`${driver.quantityVacancies} vagas`} />
                <CardDriverDetails field="Observações" data={driver.observation || "Obs."} />
            </>
        )
    }

    return (
        <div className='driver-not-found-container'>
            <p className='driver-not-found-message'>Motorista não encontrado.</p>
        </div>
    )
}

export function DriverDetails() {
    const [loading, setLoading] = useState(true)
    const [driver, setDriver] = useState()
    const { idDriver } = useParams();
    const { getDriverDetails } = useUberona()
    const { removeToken } = useContext(TokenContext)

    async function driverDetails() {
        try {
            const response = await getDriverDetails(idDriver)
            setDriver(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            if(error.status === 403) {
                removeToken()
            }
        }
    }

    useEffect(() => {
        driverDetails()
    }, [])

    return (
        <>
            <Header title={driver?.name || "Uberona"} />

            <div className='cards-driver-details-container'>
                {loading ? <Loading />
                : HandleCardsDetailsDriver(driver)}
            </div>
        </>
    )
    
}
