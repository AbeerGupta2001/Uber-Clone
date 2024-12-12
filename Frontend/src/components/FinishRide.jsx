import { BiCurrentLocation } from "react-icons/bi";
import { FaSquare } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FinishRide = ({ setFinishRidePanel }) => {
  return (
    <div>
      <div className="w-full flex justify-center mb-5">
        <button
          onClick={() => {
            setFinishRidePanel(false);
          }}
        >
          <RiArrowDownWideLine className="size-8" />
        </button>
      </div>
      <div className="bg-yellow-400 px-3 py-3 rounded-md flex justify-between items-center mb-5">
        <div className="flex items-center gap-3">
          <img
            className="size-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <h3 className="text-lg font-semibold">Abeer Gupta</h3>
        </div>
        <div>
          <h4 className="text-lg font-semibold">2.2 KM</h4>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3">Finish this ride</h3>

      <div className="flex justify-between gap-2 flex-col items-center">
        <div className="w-24"></div>
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
        <div className="flex w-full justify-center items-center gap-4">
        <Link
                to="/captain-home"
                onClick={() => {}}
                className="bg-yellow-400 text-center py-2 px-3 w-1/2 rounded-lg font-medium"
              >
                Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FinishRide;
