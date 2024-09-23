import './styles.css'

export function ButtonComponent({ text }) {
    return (
        <button type='submit' className='button-component'>
            <p>{text}</p>
        </button>
    )
}
