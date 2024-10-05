import './styles.css'
import { useNavigate } from 'react-router-dom'

function HandleDays(days) {
    return days.map((day, index) => (
        <span key={index}>
            {day.slice(0, 3)}{index < days.length - 1 ? ', ' : ''}
        </span>
    ));
}

export function CardUberona({ id, name, neighborhood, days }) {
    const navigate = useNavigate()

    return (
        <button className='card-uberona-container' onClick={() => navigate(`details/${id}`)}>
            <h1>{name}</h1>
            <p>Dias disp.: {HandleDays(days)}</p>
            <span>{neighborhood}</span>
        </button>
    )
}
