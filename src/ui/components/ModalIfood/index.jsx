import './styles.css'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DAYS_OF_WEEK } from '../../../utils/const'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useCallback, useState } from 'react'
import { ModalComponent } from '../Modal'

const createItemFormSchema = z.object({
  food: z.string().min(3),
})

export function ModalIfood({ isOpen, handleCloseModal, handleCreateProduct }) {
  const [selectedDays, setSelectedDays] = useState([])
  const { register, handleSubmit, getValues } = useForm({
    resolver: zodResolver(createItemFormSchema),
  })

  const handleDayChange = useCallback((day, checked) => {
    setSelectedDays((prevSelectedDays) =>
      checked
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day],
    )
  }, [])

  return (
    <ModalComponent
      title="Crie o seu produto"
      handleCloseModal={handleCloseModal}
      isOpen={isOpen}
      heightModal="528px"
    >
      <form
        className="ifood-form-new-item"
        onSubmit={handleSubmit(() =>
          handleCreateProduct(getValues('food'), selectedDays),
        )}
      >
        <span>Produto</span>
        <input type="text" {...register('food')} />

        <span>Dias Disponíveis</span>
        <div className="ifood-select-days-container">
          {DAYS_OF_WEEK.map((day) => (
            <label key={day.value} className="ifood-select-days-label">
              <div />
              <FormControlLabel
                labelPlacement="start"
                label={day.label}
                control={<Checkbox color="success" />}
                checked={selectedDays.includes(day.value)}
                onChange={() =>
                  handleDayChange(day.value, selectedDays.includes(day.value))
                }
              />
            </label>
          ))}
        </div>
        <button type="submit">
          <span>Cadastrar produto</span>
        </button>
      </form>
    </ModalComponent>
  )
}
