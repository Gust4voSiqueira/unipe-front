import './styles.css'

export function CardDriverDetails({ field, data }) {
    return (
        <div className='card-driver-details-container'>
            <span className='card-driver-details-field'>{field}</span>

            <h1 className='card-driver-details-data'>{data}</h1>
        </div>
    )
}