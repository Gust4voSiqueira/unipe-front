import './styles.css'
import Logo from '../../../assets/logo-small.svg';

import { SignOut } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { TokenContext } from '../../../contexts/TokenContext'

export function Home() {
    const { removeToken } = useContext(TokenContext)
    
    function handleLoggout() {
        removeToken()
    }

    // Lógica del Carrusel
    const Carrusel = () => {
        const [indiceActual, setIndiceActual] = useState(0);
        const imagenes = [
            'https://imgs.search.brave.com/zjxZ8JzymQX4-puOOxVge2B00fHcckqvRtkODol07Eg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHNkLWdyYXR1aXRh/cy9iYW5uZXItZGUt/bW9kZWxvLWRlLWFu/dW5jaW8tZGUtZmVz/dGl2YWwtZGUtbXVz/aWNhXzIzLTIxNDg3/ODIzMjkuanBnP3Np/emU9NjI2JmV4dD1q/cGc',  // Cambia las rutas por las imágenes reales
            'https://imgs.search.brave.com/UDq2zlmJkBvI3pHb3TTwZiquoB1R9ykPOzsIF7WWdJM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3liZXJjbGljay5l/cy9ocy1mcy9odWJm/cy9ibG9nL1F1ZSUy/MGVzJTIwdW4lMjBi/YW5uZXIuanBnP3dp/ZHRoPTEyMDAmbmFt/ZT1RdWUlMjBlcyUy/MHVuJTIwYmFubmVy/LmpwZw',
            'https://imgs.search.brave.com/JUZg0H1VGo5eWcxUj6Tuyalt3Jf7rbJgdSTIlZYKBTM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHNkLXByZW1pdW0v/bW9kZWxvLWRlLWJh/bm5lci1kdW90b25l/LWZlc3Rhcy1qdW5p/bmFzXzIzLTIxNDkz/ODg3ODAuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA'
        ];

        const moverSlide = (direccion) => {
            let nuevoIndice = indiceActual + direccion;

            if (nuevoIndice >= imagenes.length) {
                nuevoIndice = 0;
            } else if (nuevoIndice < 0) {
                nuevoIndice = imagenes.length - 1;
            }

            setIndiceActual(nuevoIndice);
        };

        return (
            <div className="carousel">
                <div className="carousel-container">
                    {imagenes.map((imagen, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${indiceActual === index ? 'active' : ''}`}
                        >
                            <img src={imagen} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Botones de navegación */}
                <button className="prev" onClick={() => moverSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moverSlide(1)}>&#10095;</button>
            </div>
        );
    };

    return (  
    
    <div className='home-comtainer'>
         <head>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0' />
            <link rel='preconnect' href='https://fonts.googleapis.com'/>
            <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
            <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet'/>
        </head> 
        <header className='header-home-container'>
            <div className='header-home-image-info-user'>
                <img src={Logo} alt="Logo da aplicação" />
                <div className='header-home-info-user'>
                    <p>Olá, Nome do Usuário!</p>
                    <span>23 Set, 2024</span>
                </div>
            </div>

            <button onClick={handleLoggout}>
                <SignOut size={32} color='#E1E1E6' />
            </button>
        </header>

        <div className='div-carousel'>
            <div className="App">
                <Carrusel />
            </div>
        </div>

        <h3 className='titulo-p'>Atalhos</h3>
        
        <div className='div-functions'>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>UBERONA</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>AVA NEAD</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>IFOOD UNIDESC</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>MAPA DE SALAS</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>CALENDÁRIO</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>ACHADOS/PERD</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>DOAÇÃO DE PETS</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            <div className='function-items'>
                <img className='items-img' src='https://imgs.search.brave.com/fUGKC3JGAXronuBykZJP0hccV7R8xbu77y71OPx-JyE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc'/>
                <p className='items-text'>MENTORIAS</p>
                <button className='button-icon'><span className='icon material-symbols-outlined'>arrow_forward_ios</span></button>
            </div>
            
           
        </div>

    
        </div>
    )
}
