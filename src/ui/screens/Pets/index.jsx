import './styles.css'

import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { usePets } from '../../../hooks/usePets'
import { Loading } from '../../components/Loading'
import { CardItem, CardRegisterItem } from '../../components'
import { ModalPets } from '../../components/ModalPets'

function HandleCardsPets(pets, deletePet) {
  if (pets.length === 0)
    return <p className="pets-not-found-message">Nenhum Pet encontrado.</p>

  return pets.map((pet) => (
    <CardItem
      key={pet.id}
      title={pet.pet}
      direction={pet.description}
      phone={pet.phone}
      isAddedByCurrentUser={pet.isAddedByCurrentUser}
      itemId={pet.id}
      removeItem={deletePet}
    />
  ))
}

export function Pets() {
  const [pets, setPets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { listPets, deletePet, createPet } = usePets()

  async function getPets() {
    try {
      setIsLoading(true)
      const response = await listPets()
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

  async function registerPet(pet) {
    try {
      setIsOpenModal(false)
      setIsLoading(true)
      await createPet(pet)
      getPets()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header title="Doação de Pets" />
      <ModalPets
        isOpen={isOpenModal}
        handleCloseModal={() => setIsOpenModal(false)}
        handleCreatePet={registerPet}
      />

      <div className="pets-container">
        <CardRegisterItem
          text="cadastrar um novo Pet"
          handleModal={() => setIsOpenModal(true)}
        />

        {isLoading ? <Loading /> : HandleCardsPets(pets, removePet)}
      </div>
    </>
  )
}
