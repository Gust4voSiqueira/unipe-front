import './styles.css'
import { ModalComponent } from '../Modal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createMentoringFormSchema = z.object({
    subject: z.string().min(3),
    description: z.string().min(3)
  })

export function ModalRegisterMentoring({ isOpen, handleCloseModal, handleCreateMentoring }) {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(createMentoringFormSchema),
      })

    return (
        <ModalComponent
            title="Cadastre-se como monitor"
            handleCloseModal={handleCloseModal}
            isOpen={isOpen}
            heightModal="280x"
            >
                <form
                className="pets-form-new-item"
                onSubmit={handleSubmit(handleCreateMentoring)}
            >
                <span>Assunto</span>
                <input type="text" {...register('subject')} />

                <span>Escreva uma breve descrição</span>
                <textarea rows={10} {...register('description')} />

                <button type="submit">
                <span>Cadastrar-se</span>
                </button>
            </form>
            </ModalComponent>
    )
}