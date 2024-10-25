import './styles.css'

export function CardRegisterItem({ handleModal, text }) {
    return (
        <div className="card-register-item-container">
          <p>
            Clique aqui para{' '}
            <button onClick={handleModal}>{text}</button>
          </p>
        </div>
    )
}