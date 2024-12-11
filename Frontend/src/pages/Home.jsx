import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import image from "../assets/ubermap.png";
import gsap from "gsap";
import { RiArrowDownWideLine, RiArrowUpWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";

import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehicleRef = useRef(null);
  const panelRef = useRef(null);
  const confirmVehicleRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRide, setConfirmedRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver,setWaitingForDriver] = useState(false)

  const handleSubmit = (e) => {};
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehicleRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmedRide) {
        gsap.to(confirmVehicleRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmVehicleRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRide]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );


  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
        className="w-20 absolute top-4 left-4"
      />
      <div className="h-screen w-screen">
        <img src={image} alt="uber map" className="w-full h-full" />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen bottom-0 w-full">
        <div className="bg-white h-[30%] p-5 relative">
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <button
            className="absolute top-8 right-6"
            onClick={(e) => setPanelOpen(!panelOpen)}
          >
            {panelOpen ? <RiArrowDownWideLine /> : <RiArrowUpWideFill />}
          </button>
          <form onSubmit={handleSubmit}>
            <div className="line absolute h-16 w-1 bg-gray-200 top-[46%] left-10 sm:top-[35%]"></div>
            <input
              className="bg-gray-200 px-8 py-2 rounded-lg placeholder:text-gray-400 w-full mt-3 focus:outline-none"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={(e) => setPanelOpen(true)}
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-gray-200 px-8 py-2 rounded-lg placeholder:text-gray-400 w-full mt-3 focus:outline-none"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={(e) => setPanelOpen(true)}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white  w-full">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehicleRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6"
      >
        <VehiclePanel
          setPanelOpen={setPanelOpen}
          setConfirmedRide={setConfirmedRide}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      <div
        ref={confirmVehicleRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 "
      >
        <ConfirmedRide
          setConfirmedRide={setConfirmedRide}
          setVehiclePanel={setVehiclePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 "
      >
        <LookingForDriver setVehicleFound={setVehicleFound} setConfirmedRide={setConfirmedRide} setWaitingForDriver={setWaitingForDriver} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6 "
      >
        <WaitingForDriver setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>

  );
};

export default Home;
