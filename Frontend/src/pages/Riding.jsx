import { IoIosStar } from "react-icons/io";
import image from "../assets/ubermap.png";
import { GrLocationPin } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import {Link} from 'react-router-dom'
const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed right-2 top-2 size-10 bg-white flex items-center justify-center rounded-full">
        <IoMdHome className="text-lg font-medium"/>
      </Link>
      <div className="h-1/2">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="h-1/2 p-4">
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

        <div className="flex items-center gap-4 p-3">
          <div>
            <GrLocationPin className="size-10" />
          </div>
          <div className="w-full py-3">
            <h3 className="text-2xl font-semibold">572/11-A</h3>
            <p className="text-xl text-gray-500 font-medium">
              Kaikondrahalli , Jalpaiguri
            </p>
          </div>
        </div>

        <button className="w-full bg-green-400 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>
    </div>
  );
};
export default Riding;
