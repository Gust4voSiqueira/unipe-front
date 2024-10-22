import './styles.css'

import { Loading } from '../../components'

export function ButtonComponent({ text, isLoading }) {
  return (
    <button type="submit" className="button-component" disabled={isLoading}>
      {isLoading 
      ? <div className='button-loading'><Loading size={20} /></div>
      : <p>{text}</p>}
    </button>
  )
}
