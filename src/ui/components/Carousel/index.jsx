import { useState } from "react";
import './styles.css'

export function Carousel() {
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

                <button className="prev" onClick={() => moverSlide(-1)}>&#10094;</button>
                <button className="next" onClick={() => moverSlide(1)}>&#10095;</button>
            </div>
        );
    };