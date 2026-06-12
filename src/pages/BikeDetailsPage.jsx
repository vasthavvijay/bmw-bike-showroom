import { useParams, useNavigate } from "react-router-dom";
import { useBike } from "../context/BikeContext.jsx";
import useBikes from "../hooks/useBikes.jsx";
import BikeDetails from "../components/BikeDetails.jsx";

function BikeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedBike } = useBike();
  const { bikes } = useBikes();

  const currentBike = selectedBike || bikes.find((b) => b.id === parseInt(id));

  if (!currentBike) {
    return (
      <div className="bike-detail-page">
        <h2>Bike details not found.</h2>
        <button 
          onClick={() => navigate("/bikes")}
          style={{ marginTop: "20px", padding: "10px 20px", background: "var(--primary)", color: "white", borderRadius: "5px" }}
        >
          Return to Fleet
        </button>
      </div>
    );
  }

  return (
    <div className="bike-detail-page">
      <BikeDetails bike={currentBike} />
      <button 
        onClick={() => navigate("/bikes")}
        style={{ marginTop: "30px", padding: "12px 25px", background: "transparent", color: "var(--primary)", border: "2px solid var(--primary)", borderRadius: "10px", fontWeight: "600", transition: ".3s" }}
      >
        ← Back to Collection
      </button>
    </div>
  );
}

export default BikeDetailsPage;