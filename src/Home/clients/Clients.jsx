import React from "react";
import Slider from "react-slick";
import dhanveen from "../../img/dhanveen.png";
import legact from "../../img/legacyice.png";
import aj from "../../img/aj.png";
import jewlws from "../../img/jewels.png";
function clients() {
  const settings = {
    // infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "sample",
  };
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
    <div className="wordbg bg-white flex justify-center flex-col items-center gap-10 border-b-2 border-black border-opacity-30 py-20">
      <div className="text-center ">
        <p className="text-[#287d91] text-xl my-5 font-bold">Have a Look</p>
        <p className="text-[#012b65] text-3xl font-bold">We’re Working with</p>
      </div>
      <Slider {...settings}>
        {slider.map((i) => (
          <div>
            <img src={i.img} alt="" className="w-64 mx-auto"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default clients;
