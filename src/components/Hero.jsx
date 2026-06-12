import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ride The Future</h1>
        <p>Premium BMW Bikes</p>
        <button 
          onClick={() => navigate("/bikes")} 
          style={{ 
            marginTop: "20px", 
            padding: "12px 30px", 
            background: "var(--primary)", 
            color: "white", 
            borderRadius: "30px", 
            fontSize: "1rem", 
            fontWeight: "600" 
          }}
        >
          Explore Bikes
        </button>
      </div>
    </section>
  );
}

export default Hero;