import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://imgs.search.brave.com/YJ2I_2YGbGB3f6x_YYY7V0ARK-5p_wAYdGJ3NgD1IME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjU5NjkzNy9waG90/by9wb3J0cmFpdC1v/Zi1kcml2ZXItc21p/bGluZy5qcGc_Yj0x/JnM9MTcwNjY3YSZ3/PTAmaz0yMCZjPXZX/WEpoNHZXWnB6dlR6/cGVIMjFqbk52OWtN/X3Jrcjc3eTBpTnBY/aXNSa1k9"
          />
          <h4 className="text-lg font-medium">Harsh Patel</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹234</h4>
          <p className="text-sm font-medium text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-5 bg-gray-100 mt-5 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
          <i className="text-3xl font-extralight ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-extralight ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl font-extralight ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
