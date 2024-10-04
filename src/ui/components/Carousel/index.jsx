import { useState } from "react";
import './styles.css'

export function Carousel() {
        const [indiceActual, setIndiceActual] = useState(0);
        const imagenes = [
            'https://unidesc.edu.br/wp-content/uploads/2024/10/WEBBANNERPOSGRAD.webp',
            'https://unidesc.edu.br/wp-content/uploads/2024/09/FEIRA-DO-EMPREENDEDOR2025webbanner.webp',
            'https://unidesc.edu.br/wp-content/uploads/2024/06/Banner_Proer-2024-scaled.webp'
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