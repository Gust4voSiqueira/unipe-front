import { CaretLeft } from '@phosphor-icons/react'
import './styles.css';
import { CardFound } from '../../components/CardFound';

export function LostAndFound() {
  return (
    <>
      <div className='div-contain'>
        <div className='contain-2'>
          <button className='contain-btn'>
          <CaretLeft size={32} />
          </button>
          <p className='contain-title'>Achados e Perdidos</p>
        </div>
      <div className='center'>
        <div className='div-p'><p className='p-new'>Clique aquí para <a href=''>cadastrar um novo item</a></p></div>
      </div>
      <div className='div-functions'>
      <CardFound
           title="UBERONA"
           direction="perto do bloco d"
           identifier={false}
        />
        <CardFound
           title="UBERONA"
           direction="perto do bloco d"
           identifier={false}
        />
        <CardFound
           title="UBERONA"
           direction="perto do bloco d"
           identifier={true}
        />
        <CardFound
           title="UBERONA"
           direction="perto do bloco d"
           identifier={true}
        />
        <CardFound
           title="UBERONA"
           direction="perto do bloco d"
           identifier={true}
        />
      </div>
      </div>
    </>
  );
}

