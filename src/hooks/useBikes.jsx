import { useEffect, useState } from "react";
import { getBikes } from "../services/bikeService.jsx";

export default function useBikes() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBikes();
  }, []);

  const fetchBikes = async () => {
    try {
      const data = await getBikes();
      setBikes(data);
    } catch (error) {
      console.error("Error retrieving bike data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { bikes, loading };
}