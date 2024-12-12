import { Link } from "react-router-dom";
import image from "../assets/ubermap.png";
import { MdLogout } from "react-icons/md";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
const CaptainHome = () => {

  const [ridePopup,setRidePopup] = useState(false)
  const [rideConfirmedPopup,setRideConfirmedPopup] = useState(false)
  const ridePopupRef = useRef(null)
  const rideConfirmedPopupRef = useRef(null)



  useGSAP(
    function () {
      if (ridePopup) {
        gsap.to(ridePopupRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopup]
  );

  useGSAP(
    function () {
      if (rideConfirmedPopup) {
        gsap.to(rideConfirmedPopupRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(rideConfirmedPopupRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [rideConfirmedPopup]
  );


  return (
    <div className="h-screen">
      <Link
        to="/captain/logout"
        className="fixed right-2 top-2 size-10 bg-white flex items-center justify-center rounded-full"
      >
        <MdLogout className="text-lg font-medium" />
      </Link>
      <div className="h-3/5">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="h-2/5 p-4">
        <CaptainDetails setRidePopup={setRidePopup} />
      </div>


      <div ref={ridePopupRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6">
        <RidePopUp setRidePopup={setRidePopup} setRideConfirmedPopup={setRideConfirmedPopup}/>
      </div>

      <div ref={rideConfirmedPopupRef} className="fixed w-full z-10 h-screen translate-y-full bg-white bottom-0 px-3 py-6">
        <ConfirmRidePopUp setRidePopup={setRidePopup} setRideConfirmedPopup={setRideConfirmedPopup}/>
      </div>
    </div>
  );
};

export default CaptainHome;
