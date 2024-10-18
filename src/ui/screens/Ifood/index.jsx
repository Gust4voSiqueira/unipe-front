import { CaretLeft } from '@phosphor-icons/react'
import './styles.css';
import { HeaderIfood } from '../../components/headerIfood';
import { CardIfood } from '../../components/CardIfood';

export function Ifood() {
  return (
    <>
    <div className='contain-2'>
          <button className='contain-btn'>
            <CaretLeft size={32} />
          </button>
        <p className='contain-title'>Ifood unidesc</p>
      </div>
      <div className='div-contain'>

      <HeaderIfood
        caso={2}
        title="Brigadeiro"
        status={false}
      />

      <div className='div-functions'>
      <CardIfood 
           title="UBERONA"
           dais="Seg, Qui, Sex"
           status={false}

        />
        <CardIfood 
           title="UBERONA"
            dais="Seg, Qui, Sex"
            status={false}
           
        />
        <CardIfood 
           title="UBERONA"
            dais="Seg, Qui, Sex"
            status={true}
        />
        <CardIfood 
           title="UBERONA"
            dais="Seg, Qui, Sex"
            status={true}
        />
        <CardIfood 
           title="UBERONA"
            dais="Seg, Qui, Sex"
            status={true}
        
        />
        
      </div>
      </div>
    </>
    
  );
}

