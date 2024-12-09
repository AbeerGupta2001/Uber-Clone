import  { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import image from "../assets/ubermap.png";
import gsap from "gsap";
import { RiArrowDownWideLine, RiArrowUpWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { FaUser } from "react-icons/fa";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehicleRef = useRef(null);
  const panelRef = useRef(null);
  const [vehiclePanel,setVehiclePanel] = useState(false)
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

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehicleRef.current, {
        transform:'translateY(0)',
      });
    }else{
      gsap.to(vehicleRef.current, {
        transform:'translateY(100%)',
      });
    }
  },[vehiclePanel])

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
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen} />
        </div>
      </div>


      <div ref={vehicleRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6">
        <div className="w-full flex justify-center"><button onClick={()=>{
          setVehiclePanel(false)
          setPanelOpen(true)
        }}><RiArrowDownWideLine className="size-8"/></button></div>
        <h3 className="text-2xl font-semibold mb-3">Choose a ride</h3>
        <div className="flex border-2 active:border-black border-gray-100 rounded-md w-full p-3 items-center justify-between mb-3">
          <img
            className="w-16 mr-3"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Fv1554506931%2Fnavigation%2FUberXL.png&f=1&nofb=1&ipt=61277648a864052ea169770473fbf4ecca8f93979112084044c7eedf7f3c831a&ipo=images"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-sm inline-flex">
              UberGo
              <span className="inline-flex">
                <FaUser />
                4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-medium text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>



        <div className="flex border-2 active:border-black border-gray-100 rounded-md w-full p-3 items-center justify-between mb-3">
          <img
            className="w-16 mr-3"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cc_fill%2Cw_956%2Ch_637%2Fv1649231091%2Fassets%2F2c%2F7fa194-c954-49b2-9c6d-a3b8601370f5%2Foriginal%2FUber_Moto_Orange_312x208_pixels_Mobile.png&f=1&nofb=1&ipt=85ce1be9f57fb78d0e4d47189131653dda90b9723647f3dd86cc39c2b9b2420d&ipo=images"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-sm inline-flex">
              Moto
              <span className="inline-flex">
                <FaUser />
                1
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-medium text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹125.20</h2>
        </div>



        <div className="flex border-2 active:border-black border-gray-100 rounded-md w-full p-3 items-center justify-between ">
          <img
            className="w-16 mr-3"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F03%2F31%2F21%2F15%2Frickshaw-1296278_1280.png&f=1&nofb=1&ipt=4e71f9e1c195fa1f6a1c1570bdd02982c2c98e7f9c73dc81483aa7c1120698ba&ipo=images"
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-medium text-sm inline-flex">
              Auto
              <span className="inline-flex">
                <FaUser />
                2
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-medium text-xs text-gray-600">
              Afforable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-semibold">₹150.20</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
