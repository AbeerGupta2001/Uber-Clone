import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiArrowDownWideLine } from 'react-icons/ri';

const VehiclePanel = ({setVehiclePanel,setConfirmedRide,setPanelOpen}) => {
  return (
    <>
         <div className="w-full flex justify-center">
          <button
            onClick={() => {
              setVehiclePanel(false);
              setPanelOpen(true);
            }}
          >
            <RiArrowDownWideLine className="size-8" />
          </button>
        </div>
        <h3 className="text-2xl font-semibold mb-3">Choose a ride</h3>
        <div onClick={()=>{
          setConfirmedRide(true)
          setVehiclePanel(false)
        }} className="flex border-2 active:border-black border-gray-100 rounded-md w-full p-3 items-center justify-between mb-3">
          <img
            className="w-16 mr-3"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Fv1554506931%2Fnavigation%2FUberXL.png&f=1&nofb=1&ipt=61277648a864052ea169770473fbf4ecca8f93979112084044c7eedf7f3c831a&ipo=images"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-sm inline-flex">
              UberGo
              <span className="inline-flex">
                <FaUser />4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-medium text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>

        <div onClick={()=>{
          setConfirmedRide(true)
          setVehiclePanel(false)
        }} className="flex border-2 active:border-black border-gray-100 rounded-md w-full p-3 items-center justify-between mb-3">
          <img
            className="w-16 mr-3"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cc_fill%2Cw_956%2Ch_637%2Fv1649231091%2Fassets%2F2c%2F7fa194-c954-49b2-9c6d-a3b8601370f5%2Foriginal%2FUber_Moto_Orange_312x208_pixels_Mobile.png&f=1&nofb=1&ipt=85ce1be9f57fb78d0e4d47189131653dda90b9723647f3dd86cc39c2b9b2420d&ipo=images"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-sm inline-flex">
              Moto
              <span className="inline-flex">
                <FaUser />1
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-medium text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹125.20</h2>
        </div>

        <div onClick={()=>{
          setConfirmedRide(true)
          setVehiclePanel(false)
        }} className="flex border-2 active:border-black border-gray-100 rounded-md w-full p-3 items-center justify-between ">
          <img
            className="w-16 mr-3"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F03%2F31%2F21%2F15%2Frickshaw-1296278_1280.png&f=1&nofb=1&ipt=4e71f9e1c195fa1f6a1c1570bdd02982c2c98e7f9c73dc81483aa7c1120698ba&ipo=images"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-sm inline-flex">
              Auto
              <span className="inline-flex">
                <FaUser />2
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-medium text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹150.20</h2>
        </div> 
    </>
  )
}

export default VehiclePanel
