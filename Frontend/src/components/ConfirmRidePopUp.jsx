import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaSquare } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { RiArrowDownWideLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = ({ setRidePopup, setRideConfirmedPopup }) => {

  const [inputOTP, setInputOTP] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setRideConfirmedPopup(false);
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
      <h3 className="text-2xl font-semibold mb-3">Confirm your ride</h3>

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
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              value={inputOTP}
              onChange={(e) => setInputOTP(e.target.value)}
              type="text"
              placeholder="Enter OTP"
              className="w-full border-2 rounded-lg py-2 px-3 focus:outline-none"
            />

            <div className="w-full flex justify-center items-center gap-4">
              <button
                onClick={() => {
                  setRidePopup(false);
                  setRideConfirmedPopup(false);
                }}
                className="text-black font-semibold w-1/2 bg-red-600 rounded-lg  py-2 px-3"
              >
                Reject
              </button>
              <Link
                to="/captain-riding"
                onClick={() => {}}
                className="bg-yellow-400 text-center py-2 px-3 w-1/2 rounded-lg font-medium"
              >
                Confirm
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ConfirmRidePopUp;
