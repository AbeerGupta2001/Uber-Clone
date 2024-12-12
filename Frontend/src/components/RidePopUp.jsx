import { BiCurrentLocation } from "react-icons/bi";
import { FaSquare } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { RiArrowDownWideLine } from "react-icons/ri";

const RidePopUp = ({setRidePopup,setRideConfirmedPopup}) => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setRidePopup(false)
          }}
        >
          <RiArrowDownWideLine className="size-8" />
        </button>
      </div>
      <h3 className="text-2xl font-semibold mb-3">Choose a ride</h3>

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
        <div className="flex w-full justify-end items-center gap-4">
          <button
            onClick={() => {}}
            className="text-gray-400 py-2 px-3"
          >
            Ignore
          </button>
          <button
            onClick={()=>setRideConfirmedPopup(true)}
            className="bg-yellow-400 py-2 px-3 rounded-lg font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
export default RidePopUp;
