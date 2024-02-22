import React from 'react';
import './CarouselCards.css'; 



const CarouselCards = ({ cards }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCards;
