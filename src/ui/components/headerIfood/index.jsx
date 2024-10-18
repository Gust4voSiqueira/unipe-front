import { CaretLeft } from '@phosphor-icons/react'

import './style.css'

export function HeaderIfood({caso,title, status}) {
        switch (caso) {
          case 1:
            return (
                <>  
                     <div className='center'>
                        <div className='div-p'><p className='p-new'>Clique aquí para <a href=''>començar a vender</a></p></div>
                    </div>
                </>
              )
          case 2:
            if (status) {
                return (
                    <> 
                        <div className='center'>      
                            <div className='div-p ifood-center '>
                                <p className='ifood-title'>{title}</p>   
                                <p className='p-new ifood-p-new'>Vocé esta <a href=''>online</a></p>
                                <button className='ifood-btn-finCompras ifood-btn1'>
                                    finalizar vendas                            
                                </button>
                            </div>
                        </div>
                    </>
                  );
            }
            return (
                <> 
                    <div className='center'>      
                        <div className='div-p ifood-center '>
                            <p className='ifood-title'>{title}</p>   
                            <p className='p-new ifood-p-new'>Vocé esta <a className='ifood-offline' href=''>offline</a></p>
                            <button className='ifood-btn-finCompras ifood-btn2'>
                                iniciar vendas                            
                            </button>
                        </div>
                    </div>
                </>
              );
 
        }
 
}
