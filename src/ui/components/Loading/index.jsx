import './styles.css'

export function Loading({ message, size }) {
  return (
    <div className="loader-container">
      <div
        className="loader"
        style={{ height: `${size || 30}px`, width: `${size || 30}px` }}
      />
      <p>{message}</p>
    </div>
  )
}
