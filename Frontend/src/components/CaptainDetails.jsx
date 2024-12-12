import { LuClock12, LuNotebookTabs } from "react-icons/lu";
import { SiSpeedtest } from "react-icons/si";

const CaptainDetails = ({setRidePopup}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center w-1/2">
          <img
            className="w-1/2"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Fv1554506931%2Fnavigation%2FUberXL.png&f=1&nofb=1&ipt=61277648a864052ea169770473fbf4ecca8f93979112084044c7eedf7f3c831a&ipo=images"
            alt=""
          />
          <h3 className="text-xl font-medium">Abeer</h3>
        </div>
        <div className="text-end">
          <h3 className="text-lg font-semibold">₹295.20</h3>
          <h4 className="text-gray-500 font-medium">Earned</h4>
        </div>
      </div>

      <div className="flex justify-around bg-gray-100 rounded-xl items-center py-2 mb-3">
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="flex justify-center items-center  size-10 rounded-full">
            <LuClock12 className="size-6" />
          </button>
          <h3 className="font-semibold">10.2</h3>
          <h3 className="text-sm font-semibold">Hours Online</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="flex justify-center items-center  size-10 rounded-full">
            <SiSpeedtest className="size-6" />
          </button>
          <h3 className="font-semibold">10.2</h3>
          <h3 className="text-sm font-semibold">Hours Online</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <button className="flex justify-center items-center  size-10 rounded-full">
            <LuNotebookTabs className="size-6" />
          </button>
          <h3 className="font-semibold">10.2</h3>
          <h3 className="text-sm font-semibold">Hours Online</h3>
        </div>
      </div>
      <button onClick={()=>setRidePopup(true)} className="w-full bg-yellow-300 py-2 rounded-lg font-medium">Available Rides</button>
    </div>
  );
};
export default CaptainDetails;
