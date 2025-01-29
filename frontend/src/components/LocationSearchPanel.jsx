import React from "react";
import mapIcon from "../assets/mapIcon.svg";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // Uncomment these lines if you want to open the vehicle panel and close the search panel
    // setVehiclePanel(true);
    // setPanelOpen(false);
  };

  return (
    <div>
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-2 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill text-lg"></i>
          </h2>

          <h4 className="font-medium w-full truncate">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
