import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Bikes from "../pages/Bikes.jsx";
import BikeDetailsPage from "../pages/BikeDetailsPage.jsx";
import Contact from "../pages/Contact.jsx";

function AppRoutes() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", paddingBottom: "40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:id" element={<BikeDetailsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2026 BMW Motorrad Showroom. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default AppRoutes;