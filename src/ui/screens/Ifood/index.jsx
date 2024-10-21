import './styles.css'
import { Header } from '../../components/Header'
import { CardIfood } from '../../components/CardIfood'
import { Loading } from '../../components/Loading'
import { useEffect, useState } from 'react'
import { useIfood } from '../../../hooks/useIfood'
import { ModalIfood } from '../../components/ModalIfood'
import { HeaderIfood } from '../../components/HeaderIfood'

function HandleCardsFood({ foods, deleteProduct }) {
  if (foods.length > 0) {
    return foods.map((food) => (
      <CardIfood
        key={food.id}
        id={food.id}
        title={food.food}
        days={food.availableDays}
        status={food.isOnline}
        isAddedByCurrentUser={food.isAddedByCurrentUser}
        phone={food.phone}
        deleteProduct={deleteProduct}
      />
    ))
  }

  return (
    <p className="products-not-found-message">Nenhum produto encontrado...</p>
  )
}

export function Ifood() {
  const { insertFood, deleteProduct } = useIfood()
  const [foods, setFoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [foodInCurrentUser, setFoodInCurrentUser] = useState(false)
  const { listFoods, updateStatus, getIsProductInCurrentUser } = useIfood()

  async function fetchFoods() {
    try {
      setIsLoading(true)
      setFoods(await listFoods())
      setFoodInCurrentUser(await getIsProductInCurrentUser())

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function onUpdateStatus(idFood, newStatus) {
    try {
      setIsLoading(true)
      await updateStatus(idFood, newStatus)
      fetchFoods()
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function handleCreateProduct(food, days) {
    if (days.length === 0) return

    const newProduct = {
      food,
      days,
    }

    try {
      await insertFood(newProduct)
      setOpenModal(false)
      fetchFoods()
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteProduct(productId) {
    try {
      await deleteProduct(productId)
      fetchFoods()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFoods()
  }, [])

  return (
    <>
      <Header title="IFood Unidesc" />
      <ModalIfood
        isOpen={openModal}
        handleCreateProduct={handleCreateProduct}
        handleCloseModal={() => setOpenModal(false)}
      />
      <div className="ifood-container">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {foodInCurrentUser.isExistsFood ? (
              <HeaderIfood
                title={foodInCurrentUser.food}
                idFood={foodInCurrentUser.id}
                isOnline={foodInCurrentUser.isOnline}
                updateStatus={onUpdateStatus}
              />
            ) : (
              // Trocar para componente após implementação do Pets
              <div className="lost-and-found-center">
                <p className="lost-and-found-p-new">
                  Clique aqui para{' '}
                  <button onClick={() => setOpenModal(true)}>
                    começar a vender
                  </button>
                </p>
              </div>
            )}

            <div className="ifood-list-cards-container">
              <HandleCardsFood foods={foods} deleteProduct={handleDeleteProduct} />
            </div>
          </>
        )}
      </div>
    </>
  )
}
