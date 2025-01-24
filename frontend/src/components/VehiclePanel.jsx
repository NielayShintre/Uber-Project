import React from "react";

const VehiclePanel = (props) => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(!props.confirmRidePanel)
        }}
        className="flex items-center justify-between mb-2 border-2 active:border-black rounded-xl p-3"
      >
        <img
          className="h-12 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            UberGo
            <span>
              <i className="ri-user-line ml-1">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-green-600">
            Affordable compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹192.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between mb-2 border-2 active:border-black rounded-xl p-3"
      >
        <img
          className="h-12 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            Uber Motorbike
            <span>
              <i className="ri-user-line ml-1">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-green-600">
            Affordable motor rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹65.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between mb-2 border-2 active:border-black rounded-xl p-3"
      >
        <img
          className="h-12 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            Uber Premium
            <span>
              <i className="ri-user-line ml-1">5</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-green-600">
            Affordable premium rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹592.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between mb-2 border-2 active:border-black rounded-xl p-3"
      >
        <img
          className="h-12 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_1152/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-sm">
            Uber Auto
            <span>
              <i className="ri-user-line ml-1">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-green-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹102.20</h2>
      </div>
    </>
  );
};

export default VehiclePanel;
