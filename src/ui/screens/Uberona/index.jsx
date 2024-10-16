import './styles.css'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'

import WarningIcon from '../../../assets/uberona-warning-icon.svg'

export function Uberona() {
  const navigate = useNavigate()

  return (
    <>
      <Header title="Uberona" link="/" />

      <div className="uberona-warning-container">
        <div className="uberona-warning-icon-container">
          <img src={WarningIcon} alt="Alerta" />
          <h3 className="uberona-warning-alert-text">ATENÇÃO</h3>
        </div>

        <p className="uberona-warning-text">
          Esta funcionalidade foi desenvolvida por alunos; portanto, tome todas
          as precauções ao aceitar qualquer carona.
        </p>

        <div className="uberona-warning-buttons-container">
          <button
            className="uberona-warning-button button-purple"
            onClick={() => navigate('/driver')}
          >
            <span>Sou Motorista</span>
          </button>
          <button
            className="uberona-warning-button button-green"
            onClick={() => navigate('/passenger')}
          >
            <span>Sou Passageiro</span>
          </button>
        </div>
      </div>
    </>
  )
}
