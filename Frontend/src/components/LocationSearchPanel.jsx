import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = ({vehiclePanel,setVehiclePanel,setPanelOpen}) => {

  // sample array for locations

  const locations = [
    "Opposite Saint Paul's School, Paharpur, Jalpaiguri",
    "Opposite Saint Paul's School, Paharpur, Jalpaiguri",
    "Opposite Saint Paul's School, Paharpur, Jalpaiguri",
  ]

  return (
    <div>
      {/* {/* This a just a sample data */}

      {
        locations.length > 0 && (
          locations.map((location,index) => (
            <div key={index} onClick={()=>{
              setVehiclePanel(true)
              setPanelOpen(false)
              }} className="flex gap-3 p-3 rounded-xl border-2 active:border-black my-2 items-center justify-start">
              <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                <FaLocationDot />
              </h2>
              <h4 className="font-medium">{location}</h4>
            </div>
          ))
        )
      }
    </div>
  );
};

export default LocationSearchPanel;
