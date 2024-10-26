import './styles.css'
import { useState, useEffect } from 'react'
import { Header, Loading, ModalFoundAndLost } from '../../components'
import { useLostAndFound } from '../../../hooks/useLostAndFound'

function HandleCardsLostAndFound({ items, removeItem }) {
  return items.map((item, index) => (
    <CardItemAndPets
      key={index}
      itemId={item.id}
      title={item.item}
      direction={item.local}
      phone={item.phone}
      isAddedByCurrentUser={item.isAddedByCurrentUser}
      removeItem={removeItem}
    />
  ))
}

export function LostAndFound() {
  const { getItems, registerNewItem, deleteItem } = useLostAndFound()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleModal() {
    setIsOpenModal(!isOpenModal)
  }

  async function getListItems() {
    try {
      const response = await getItems()

      setItems(response)
      setIsOpenModal(false)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleCreateItem(item) {
    try {
      await registerNewItem(item)
      getListItems()
    } catch (error) {
      console.log(error)
    }
  }

  async function handleRemoveItem(itemId) {
    try {
      await deleteItem(itemId)
      getListItems()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListItems()
  }, [])

  if (loading)
    return (
      <>
        <Header title="Achados e Perdidos" />
        <div className="lost-and-found-div-contain">
          <Loading message="Buscando itens" />
        </div>
      </>
    )

  return (
    <>
      <Header title="Achados e Perdidos" />

      {isOpenModal && (
        <ModalFoundAndLost
          isOpen={isOpenModal}
          handleCloseModal={handleModal}
          handleCreateItem={handleCreateItem}
        />
      )}

      <div className="lost-and-found-div-contain">
        <CardRegisterItem text="cadastrar um novo item" handleModal={handleModal} />
        {items.length > 0 ? (
          <HandleCardsLostAndFound
            items={items}
            removeItem={handleRemoveItem}
          />
        ) : (
          <p className="lost-and-found-text-message">Nenhum item encontrado.</p>
        )}
      </div>
    </>
  )
}
