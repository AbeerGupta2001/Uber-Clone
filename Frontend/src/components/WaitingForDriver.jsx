import { IoIosStar } from "react-icons/io";
import { BiSend } from "react-icons/bi";
import { BsShield } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { RiArrowDownWideLine } from "react-icons/ri";
const WaitingForDriver = ({setVehicleFound,setWaitingForDriver}) => {
  return (
    <div className="p-2">
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setVehicleFound(true)
            setWaitingForDriver(false)
          }}
        >
          <RiArrowDownWideLine className="size-8" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="w-16">
          <img
            className="w-full"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Fv1554506931%2Fnavigation%2FUberXL.png&f=1&nofb=1&ipt=61277648a864052ea169770473fbf4ecca8f93979112084044c7eedf7f3c831a&ipo=images"
            alt=""
          />
        </div>
        <div className="text-end">
          <h4 className="text-gray-400">Abeer</h4>
          <h3 className="text-2xl font-bold">MHUR-6711</h3>
          <p className="text-gray-500">Maruti Suzuki Alto</p>
          <div>
            <span className="inline-flex items-center">
              <IoIosStar />
              4.9
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-3">
        <input
          type="text"
          placeholder="Send a message..."
          className="bg-gray-200 placeholder:text-gray-500 px-4 py-2 rounded-l-lg w-1/2 focus:outline-none"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-r-lg text-gray-500">
          <BiSend className="size-6" />
        </button>
      </div>

      <div className="flex justify-around items-center py-3 border-b-2 mb-5">
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="text-blue-500 flex justify-center items-center bg-gray-300 size-14 rounded-full">
            <BsShield className="size-6" />
          </button>
          <h3 className="text-sm font-semibold">Safety</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="text-blue-500 flex justify-center items-center bg-gray-300 size-14 rounded-full">
            <ImLocation2 className="size-6" />
          </button>
          <h3 className="text-sm font-semibold">Share my trip</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="text-blue-500 flex justify-center items-center bg-gray-300 size-14 rounded-full">
            <MdCall className="size-6" />
          </button>
          <h3 className="text-sm font-semibold">Call driver</h3>
        </div>
      </div>

      <div className="flex items-center gap-4 p-3">
        <div>
          <GrLocationPin className="size-10" />
        </div>
        <div className="border-b-2 w-full py-3">
          <h3 className="text-2xl font-semibold">572/11-A</h3>
          <p className="text-xl text-gray-500 font-medium">
            Kaikondrahalli , Jalpaiguri
          </p>
        </div>
      </div>
    </div>
  );
};
export default WaitingForDriver;
