function BikeDetails({ bike }) {
  if (!bike) return null;

  return (
    <div className="details-container">
      <img src={bike.image} alt={bike.name} />

      <div className="details-content">
        <h2>{bike.name}</h2>
        <p><strong>Price:</strong> {bike.price}</p>
        <p><strong>Engine:</strong> {bike.engine}</p>
        <p><strong>Power:</strong> {bike.power}</p>
        <p><strong>Top Speed:</strong> {bike.speed}</p>
        <p><strong>Color:</strong> {bike.color}</p>
      </div>
    </div>
  );
}

export default BikeDetails;