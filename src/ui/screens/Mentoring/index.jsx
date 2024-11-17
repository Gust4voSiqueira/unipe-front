import './styles.css'

import { CardItem, CardRegisterItem, Header, Loading } from '../../components'
import { useEffect, useState } from 'react'
import { useMentoring } from '../../../hooks/useMentoring'
import { ModalRegisterMentoring } from '../../components/ModalRegisterMentoring'

function HandleCardsMentoring(mentorings, deleteMentoring) {
  if (mentorings.length === 0)
    return (
      <p className="mentorings-not-found-message">
        Nenhuma mentoria disponível.
      </p>
    )

  return mentorings.map((mentoring) => (
    <CardItem
      key={mentoring.id}
      title={mentoring.subject}
      direction={mentoring.description}
      phone={mentoring.phone}
      isAddedByCurrentUser={mentoring.isAddedByCurrentUser}
      itemId={mentoring.id}
      removeItem={deleteMentoring}
    />
  ))
}

export function Mentoring() {
  const [mentorings, setMentorings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { listMentorings, deleteMentoring, createMentoring } = useMentoring()

  async function getMentorings() {
    try {
      setIsLoading(true)
      const response = await listMentorings()
      setMentorings(response)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  async function removeMentoring(mentoringId) {
    setIsLoading(true)
    await deleteMentoring(mentoringId)
    getMentorings()
  }

  async function registerMentoring(mentoring) {
    try {
      setIsOpenModal(false)
      setIsLoading(true)
      await createMentoring(mentoring)
      getMentorings()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMentorings()
  }, [])

  return (
    <>
      <Header title="Mentorias" />
      <ModalRegisterMentoring
        isOpen={isOpenModal}
        handleCloseModal={() => setIsOpenModal(false)}
        handleCreateMentoring={registerMentoring}
      />

      <div className="mentoring-container">
        <CardRegisterItem
          text="começar a mentorar"
          handleModal={() => setIsOpenModal(true)}
        />

        {isLoading ? (
          <Loading />
        ) : (
          HandleCardsMentoring(mentorings, removeMentoring)
        )}
      </div>
    </>
  )
}
