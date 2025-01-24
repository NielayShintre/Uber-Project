import React from "react";
import mapIcon from "../assets/mapIcon.svg";
const LocationSearchPanel = (props) => {
  const locations = [
    " 24B, Near Kapoor's Cafe, Coding School, Bhopal",
    " 24B, Near Kapoor's Cafe, Coding School, Bhopal",
    " 24B, Near Kapoor's Cafe, Coding School, Bhopal",
    " 24B, Near Kapoor's Cafe, Coding School, Bhopal",
  ];
  return locations.map((ele, i) => {
    return (
      <div
        key={i}
        onClick={() => {
          props.setVehiclePanel(true);
          props.setPanel(false);
        }}
        className="flex border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start my-2 items-center gap-2"
      >
        <span className="bg-[#eee] p-2 rounded-full w-10">
          <img src={mapIcon} className="w-full" />
        </span>

        <h4 className="font-medium">{ele}</h4>
      </div>
    );
  });
};

export default LocationSearchPanel;
