import './styles.css'

import { z } from 'zod'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import { zodResolver } from '@hookform/resolvers/zod'

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
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-container">
        <Box
          bgcolor="#29292E"
          width="90%"
          height="280px"
          margin="auto"
          borderRadius={2}
          padding={2}
          position="relative"
        >
          <button className="button-close-modal" onClick={handleCloseModal}>
            <X color="#7C7C8A" size={20} weight="bold" />
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="#8D8D99"
            fontFamily="Roboto"
            fontSize={16}
            textAlign="center"
          >
            Cadastrar um novo item
          </Typography>

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
        </Box>
      </div>
    </Modal>
  )
}
