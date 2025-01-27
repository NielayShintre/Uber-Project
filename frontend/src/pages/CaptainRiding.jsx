import ubermap from "../assets/ubermap.jpeg";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uberlogo.png";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  //   const location = useLocation();
  const rideData = location.state?.ride;

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
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img className="w-16" src={uberLogo} />
        <Link
          to="/captain-home"
          className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover" src={ubermap} />
      </div>
      <div className="h-1/5 p-6 flex justify-between items-center bg-yellow-400">
        <h4 className="font-semibold text-xl">4 KM away</h4>
        <button
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className="w-2/3 bg-green-500 p-3 rounded-lg text-white"
        >
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
