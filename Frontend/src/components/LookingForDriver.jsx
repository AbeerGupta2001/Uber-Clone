import { BiCurrentLocation } from "react-icons/bi";
import { FaSquare } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { RiArrowDownWideLine } from "react-icons/ri";

const LookingForDriver = ({setVehicleFound,setWaitingForDriver,setConfirmedRide}) => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setVehicleFound(false)
            setConfirmedRide(true)
          }}
        >
          <RiArrowDownWideLine className="size-8" />
        </button>
      </div>
      <h3 className="text-2xl font-semibold mb-3">Looking for driver</h3>

      <div className="flex justify-between gap-2 flex-col items-center">
        <div className="w-24">
          <img
            className="w-full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Fv1554506931%2Fnavigation%2FUberXL.png&f=1&nofb=1&ipt=61277648a864052ea169770473fbf4ecca8f93979112084044c7eedf7f3c831a&ipo=images"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 border-b-2 pb-3">
            <BiCurrentLocation className="size-6" />
            <div className="">
              <h3 className="text-lg font-semibold">523/11-A</h3>
              <p>Rajbari Lake,Jalpaiguri</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b-2 py-3">
            <FaSquare className="size-5" />
            <div className="">
              <h3 className="text-lg font-semibold">523/11-A</h3>
              <p>Rajbari Lake,Jalpaiguri</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3">
            <MdCurrencyRupee />
            <div>
              <h3 className="text-lg font-semibold">193.22</h3>
              <p>Cash</p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
          setVehicleFound(false)
          setWaitingForDriver(true)}} className="w-full bg-green-400 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};
export default LookingForDriver;
