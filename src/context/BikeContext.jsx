import { createContext, useContext, useState } from "react";

const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
  const [selectedBike, setSelectedBike] = useState(null);

  return (
    <BikeContext.Provider value={{ selectedBike, setSelectedBike }}>
      {children}
    </BikeContext.Provider>
  );
};

export const useBike = () => useContext(BikeContext);