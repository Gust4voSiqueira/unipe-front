import './styles.css'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { X } from '@phosphor-icons/react'
import Typography from '@mui/material/Typography'

export function ModalComponent({
  title,
  children,
  handleCloseModal,
  isOpen,
  heightModal,
}) {
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
          height={heightModal}
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
            {title}
          </Typography>

          {children}
        </Box>
      </div>
    </Modal>
  )
}
