import { React, useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://imgs.search.brave.com/GCEP6ifXDLRIqVOqpJpXyVDfT8oBKJnJ3tvqrGEeH_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MjQ5NDg2L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZmVtYWxlLXRh/eGktZHJpdmVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0y/amg2c0hHZkt0NlRI/b3hVR3RQLXQ5Tkl3/UUlZM3N3V3RtaGFv/emNuVW5ZPQ"
          />
          <h2 className="text-xl font-medium">Monica Sharma</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex justify-between flex-col items-center gap-2"></div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600">HSR Layout, Bengaluru</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-line text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">566/11-C</h3>
            <p className="text-sm text-gray-600">Panathur, Bengaluru</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="ri-cash-line"></i>
          <div>
            <h3 className="text-lg font-medium">193.20</h3>
            <p className="text-sm text-gray-600">Cash</p>
          </div>
        </div>
      </div>
      <form></form>
      <div className="mt-4">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
            type="number"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            value={otp}
            placeholder="Enter OTP"
          />
          <Link
            to="/captain-riding"
            className="w-full mt-6 flex justify-center bg-green-500 p-3 rounded-lg text-white"
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="w-full mt-3 bg-red-500 text-white p-3 rounded-lg text-grey"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
