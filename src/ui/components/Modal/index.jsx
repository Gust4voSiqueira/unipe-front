import './styles.css'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

export function ModalSelectedCity({ optionSelected, open, handleClose, updateCity }) {
  const [ selected, setSelected ] = useState(optionSelected)

  function handleUpdateOptionSelected(optionSelected) {
    setSelected(optionSelected)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-container">
          <Box bgcolor="#29292E" width="50%" height="280px" margin="auto" borderRadius={6} padding={2}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color='#8D8D99' fontFamily="Roboto" fontSize={16} textAlign="center">
                Selecione sua cidade
            </Typography>
            <div className='buttons-select-city-container'>
                <button className={`select-city-button ${selected === "Cidade Ocidental" && 'city-selected'}`} onClick={() => handleUpdateOptionSelected("Cidade Ocidental")}>
                    <span>Cidade Ocidental</span>
                </button>
                <button className={`select-city-button ${selected === "Luziânia" && 'city-selected'}`} onClick={() => handleUpdateOptionSelected("Luziânia")}>
                    <span>Luziânia</span>
                </button>
                <button className={`select-city-button ${selected === "Jardim Ingá" && 'city-selected'}`} onClick={() => handleUpdateOptionSelected("Jardim Ingá")}>
                    <span>Jardim Ingá</span>
                </button>
                <button className={`select-city-button ${selected === "Valparaíso" && 'city-selected'}`} onClick={() => handleUpdateOptionSelected("Valparaíso")}>
                    <span>Valparaíso</span>
                </button>

                <button className='button-select-city' onClick={() => updateCity(selected)}>
                    <span>Selecionar</span>
                </button>
            </div>
          </Box>
        </div>
      </Modal>
    </>
  )
}
