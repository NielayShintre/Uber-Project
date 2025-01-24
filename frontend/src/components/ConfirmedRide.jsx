import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex justify-between flex-col items-center gap-2">
        <img
          className="h-20 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png"
        />
      </div>
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
      <div
        onClick={() => {
          props.setVehicleFound(true)
          props.setConfirmRidePanel(!props.confirmRidePanel)
        }}
        className="w-full mt-3 bg-green-500 p-3 rounded-lg text-white"
      >
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
