import React from "react";
import { useNavigate } from "react-router-dom";
import BikeCard from "../components/BikeCard.jsx";
import SkeletonLoader from "../components/SkeletonLoader.jsx";
import useBikes from "../hooks/useBikes.jsx";
import { useBike } from "../context/BikeContext.jsx";

function Bikes() {
  const { bikes, loading } = useBikes();
  const { setSelectedBike } = useBike();
  const navigate = useNavigate();

  const handleSelectBike = (bike) => {
    setSelectedBike(bike);
    navigate(`/bikes/${bike.id}`);
  };

  if (loading) return <SkeletonLoader />;

  return (
    <div className="bike-page">
      <h1 className="page-title">BMW Bike Collection</h1>
      <div className="bike-grid">
        {bikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            onSelect={handleSelectBike}
          />
        ))}
      </div>
    </div>
  );
}

export default Bikes;