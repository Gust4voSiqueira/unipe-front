import './styles.css'

import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { usePets } from '../../../hooks/usePets'
import { Loading } from '../../components/Loading'
import { CardItemAndPets } from '../../components/CardItemAndPets'
import { CardRegisterItem } from '../../components/CardRegisterItem'

function HandleCardsPets(pets, deletePet) {
    if(pets.length === 0) return <p className='pets-not-found-message'>Nenhum Pet encontrado.</p>

    return pets.map(pet =>
        <CardItemAndPets
            key={pet.id}
            title={pet.pet}
            direction={pet.description}
            phone={pet.phone}
            isAddedByCurrentUser={pet.isAddedByCurrentUser}
            itemId={pet.id}
            removeItem={deletePet} />)
}

export function Pets() {
    const [ pets, setPets ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const { listPets, deletePet } = usePets()

    async function getPets() {
        try {
            setIsLoading(true)
            const response = await listPets();
            setPets(response)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    async function removePet(petId) {
        setIsLoading(true)
        await deletePet(petId)
        getPets()
    }

    useEffect(() => {
        getPets()
    }, [])

    return (
        <>
            <Header title="Doação de Pets" />

            <div className='pets-container'>
                <CardRegisterItem text="cadastrar um novo Pet" />

                {
                    isLoading 
                    ? <Loading /> 
                    : HandleCardsPets(pets, removePet)
                }
            </div>
        </>
    )
}
