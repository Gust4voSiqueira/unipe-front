import './styles.css'
import { Header } from '../../components/Header'
import { HeaderIfood } from '../../components/HeaderIfood'
import { CardIfood } from '../../components/CardIfood'

export function Ifood() {
  return (
    <>
      <Header title="IFood Unidesc" />
      <div className="ifood-container">
        <HeaderIfood title="Brigadeiro" isOnline={false} />

        <div className="ifood-list-cards-container">
          <CardIfood title="UBERONA" dais="Seg, Qui, Sex" status={false} />
          <CardIfood title="UBERONA" dais="Seg, Qui, Sex" status={false} />
          <CardIfood title="UBERONA" dais="Seg, Qui, Sex" status={true} />
          <CardIfood title="UBERONA" dais="Seg, Qui, Sex" status={true} />
          <CardIfood title="UBERONA" dais="Seg, Qui, Sex" status={true} />
        </div>
      </div>
    </>
  )
}
