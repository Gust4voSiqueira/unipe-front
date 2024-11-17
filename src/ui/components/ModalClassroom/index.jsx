import { z } from 'zod'
import { ModalComponent } from '../Modal'
import './styles.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const insertClassroomFormSchema = z.object({
    discipline: z.string().min(3),
    classroom: z.string().min(1),
  })

export function ModalClassroom({
    isOpen,
    handleCloseModal,
    handleInsertClassroom,
  }) {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(insertClassroomFormSchema),
      })
      const [day, setDay] = useState('segunda')

      function handleSubmitClassroom(classroom) {
        handleInsertClassroom({ ...classroom, day })
      }

    return (
        <ModalComponent
      title="Cadastrar uma nova sala"
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      heightModal="360px"
    >
      <form
        className="classroom-modal-form-new-item"
        onSubmit={handleSubmit(handleSubmitClassroom)}
      >
        <span>Disciplina</span>
        <input type="text" {...register('discipline')} />

        <span>Dia da semana</span>
        <select name="days" className='input-select' value={day} onChange={e => setDay(e.target.value)} >
          <option value="segunda" className='input-option'>Segunda-feira</option>
          <option value="terca" className='input-option'>Terça-feira</option>
          <option value="quarta" className='input-option'>Quarta-feira</option>
          <option value="quinta" className='input-option'>Quinta-feira</option>
          <option value="sexta" className='input-option'>Sexta-feira</option>
        </select>

        <span>Sala</span>
        <input type="text" {...register('classroom')} />

        <button>
          <span>Cadastrar sala de aula</span>
        </button>
      </form>
    </ModalComponent>
    )
}