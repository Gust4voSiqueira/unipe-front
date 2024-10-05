import './styles.css'

function HandleDays(days) {
    return days.map((day, index) => (
        <span key={index}>
            {day.slice(0, 3)}{index < days.length - 1 ? ', ' : ''}
        </span>
    ));
}

export function CardUberona({ name, neighborhood, days }) {
    return (
        <div className='card-uberona-container'>
            <h1>{name}</h1>
            <span>Dias disp.: {HandleDays(days)}</span>
            <br />
            <span>{neighborhood}</span>
        </div>
    )
}
