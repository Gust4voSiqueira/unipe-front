import './styles.css'
import { useState } from 'react'
import { ModalComponent } from '../Modal'

export function ModalSelectedCity({
  optionSelected,
  open,
  handleClose,
  updateCity,
}) {
  const [selected, setSelected] = useState(optionSelected)

  function handleUpdateOptionSelected(optionSelected) {
    setSelected(optionSelected)
  }

  return (
    <>
      <ModalComponent
        title="Seleciona sua cidade"
        isOpen={open}
        handleCloseModal={handleClose}
        heightModal="280px"
      >
        <div className="buttons-select-city-container">
          <button
            className={`select-city-button ${
              selected === 'Cidade Ocidental' && 'city-selected'
            }`}
            onClick={() => handleUpdateOptionSelected('Cidade Ocidental')}
          >
            <span>Cidade Ocidental</span>
          </button>
          <button
            className={`select-city-button ${
              selected === 'Luziânia' && 'city-selected'
            }`}
            onClick={() => handleUpdateOptionSelected('Luziânia')}
          >
            <span>Luziânia</span>
          </button>
          <button
            className={`select-city-button ${
              selected === 'Jardim Ingá' && 'city-selected'
            }`}
            onClick={() => handleUpdateOptionSelected('Jardim Ingá')}
          >
            <span>Jardim Ingá</span>
          </button>
          <button
            className={`select-city-button ${
              selected === 'Valparaíso' && 'city-selected'
            }`}
            onClick={() => handleUpdateOptionSelected('Valparaíso')}
          >
            <span>Valparaíso</span>
          </button>

          <button
            className="button-select-city"
            onClick={() => updateCity(selected)}
          >
            <span>Selecionar</span>
          </button>
        </div>
      </ModalComponent>
    </>
  )
}
