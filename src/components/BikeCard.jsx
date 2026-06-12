import React from "react";

function BikeCard({ bike, onSelect }) {
  return (
    <div className="bike-card">
      <div className="bike-image">
        <img src={bike.image} alt={bike.name} />
      </div>

      <div className="bike-info">
        <h3>{bike.name}</h3>
        <p>Engine: {bike.engine}</p>
        <p>Power: {bike.power}</p>
        <p>Top Speed: {bike.speed}</p>
        <p>Price: {bike.price}</p>

        <button onClick={() => onSelect(bike)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default React.memo(BikeCard);