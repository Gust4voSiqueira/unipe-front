import { useState } from 'react'
import './styles.css'

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://unidesc.edu.br/wp-content/uploads/2024/10/WEBBANNERPOSGRAD.webp',
    'https://unidesc.edu.br/wp-content/uploads/2024/09/FEIRA-DO-EMPREENDEDOR2025webbanner.webp',
    'https://unidesc.edu.br/wp-content/uploads/2024/06/Banner_Proer-2024-scaled.webp',
  ];
  
  const moveSlide = (direction) => {
    let newIndex = currentIndex + direction;
  
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
  
    setCurrentIndex(newIndex);
  };
  
  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              currentIndex === index ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
  
      <button className="prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>
  );
  
}
