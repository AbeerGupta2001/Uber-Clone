import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../assets/ubermap.png";
import { RiArrowUpWideLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
import { useRef, useState } from "react";

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );




  return (
    <div className="h-screen">
      <Link
        to="/captain/logout"
        className="fixed right-2 top-2 size-10 bg-white flex items-center justify-center rounded-full"
      >
        <MdLogout className="text-lg font-medium" />
      </Link>
      <div className="h-4/5">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="h-1/5 flex flex-col gap-5 bg-yellow-400">
        <div>
            <button onClick={()=>setFinishRidePanel(true)} className="w-full flex justify-center">
                <RiArrowUpWideLine className="size-8"/>
            </button>
        </div>
        <div className="flex justify-around items-center">
            <h4 className="text-lg font-semibold">4 KM away</h4>
            <button className="bg-green-500 font-semibold px-3 py-2 rounded-md">
                Complete Ride
            </button>
        </div>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full h-screen z-10 translate-y-full bg-white bottom-0 px-3 py-6 "
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};
export default CaptainRiding;
