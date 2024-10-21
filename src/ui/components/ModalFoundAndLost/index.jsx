import './styles.css'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalComponent } from '../Modal'

const createItemFormSchema = z.object({
  item: z.string().min(3),
  local: z.string().min(5),
})

export function ModalFoundAndLost({
  isOpen,
  handleCloseModal,
  handleCreateItem,
}) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(createItemFormSchema),
  })

  return (
    <ModalComponent title="Cadastrar um novo item" isOpen={isOpen} handleCloseModal={handleCloseModal} heightModal="280px">
          <form
            className="lost-and-found-form-new-item"
            onSubmit={handleSubmit(handleCreateItem)}
          >
            <span>Item encontrado</span>
            <input type="text" {...register('item')} />

            <span>Local em que você o encontrou</span>
            <input type="text" {...register('local')} />

            <button>
              <span>Cadastrar item</span>
            </button>
          </form>
    </ModalComponent>
  )
}
