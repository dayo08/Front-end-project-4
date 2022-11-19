import React from "react";
import dhanveen from "../../img/dhanveen.png";
import legact from "../../img/legacyice.png";
import aj from "../../img/aj.png";
import jewlws from "../../img/jewels.png";

function OurClients() {
  const slider = [
    {
      id: 0,
      img: dhanveen,
    },
    {
      id: 1,
      img: legact,
    },
    {
      id: 2,
      img: dhanveen,
    },
    {
      id: 3,
      img: aj,
    },
    {
      id: 4,
      img: jewlws,
    },
    {
      id: 5,
      img: legact,
    },
  ];
  return (
    <div className="wordbg bg-white flex justify-center flex-col items-center gap-10 flex-wrap py-20">
      <div className="text-center ">
        <p className="text-[#287d91] text-4xl my-5 font-bold">Our Clients</p>
        <p className="text-[#012b65] text-xl font-bold">Social Media Success Stories of Brands</p>
      </div>
      <div className="flex">
        {slider.map((i) => (
          <div className="flex">
            <img src={i.img} alt="" className="w-64 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
