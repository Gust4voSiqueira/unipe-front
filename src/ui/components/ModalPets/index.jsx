import './styles.css'

import { z } from 'zod'
import { ModalComponent } from '../Modal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createPetFormSchema = z.object({
    pet: z.string().min(3),
    description: z.string().min(3)
  })

export function ModalPets({ isOpen, handleCloseModal, handleCreatePet }) {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(createPetFormSchema),
      })

    return (
        <ModalComponent
            title="Crie o seu produto"
            handleCloseModal={handleCloseModal}
            isOpen={isOpen}
            heightModal="280x"
            >
                <form
                className="pets-form-new-item"
                onSubmit={handleSubmit(handleCreatePet)}
            >
                <span>Pet encontrado</span>
                <input type="text" {...register('pet')} />

                <span>Escreva uma breve descrição</span>
                <textarea rows={10} {...register('description')} />

                <button type="submit">
                <span>Cadastrar pet</span>
                </button>
            </form>
            </ModalComponent>
    )
}