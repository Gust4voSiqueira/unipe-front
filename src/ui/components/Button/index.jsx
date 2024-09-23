import './styles.css'

export function ButtonComponent({ text, isLoading }) {
    return (
        <button type='submit' className='button-component' disabled={isLoading}>
            <p>{text}</p>
        </button>
    )
}
