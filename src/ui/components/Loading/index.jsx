import './styles.css'

export function Loading({ message }) {
  return (
    <div className="loader-container">
      <div className="loader" />
      <p>{message}</p>
    </div>
  )
}
