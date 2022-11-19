import React from "react";
import Slider from "react-slick";
import dhanveen from "../../img/croual1.png";
import aj from "../../img/croual2.png";
import jewlws from "../../img/croual3.png";

function Crouseal() {
  const slider = [
    {
      id: 0,
      img: dhanveen,
      title: "A Best Digital Marketing Agency In Suart",
      discribtion:
        "Bring your Problems to Tale-B A best Digital Marketing Company in Surat, and Get Solved all Your Problems.",
      comoany: "Talk To Us",
    },
    {
      id: 1,
      img: aj,
      title: "Best SEO Agency You Got In Surat",
      discribtion:
        "Advanced SEO With Speiclized Experts at Tale-B - A SEO Agency. We are Best Digital Marketing Agency you Ever Find. ",
      comoany: "Check SEO",
    },
    {
      id: 2,
      img: jewlws,
      title: "Strategy & planning are fundamentals of our philosophy ",
      discribtion:
        "We calculate all economic indicators and understand feasibility of advertising campaign ",
      comoany: "How it Works ",
    },
  ];
  const settings = {
    // infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    className: "sample1",
  };
  return (
    <div>
      <div className=" flex justify-center flex-col items-center   md:py-40 py-10" >
        <Slider {...settings}>
          {/* <div className=""> */}
          {slider.map((i) => (
            <>
              <div
                className="flex md:flex-row flex-col justify-evenly md:text-start text-center mx-auto"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div>
                  <div className="text-[#001039] lg:w-96 w-72 flex flex-col  items-center justify-start md:items-start gap-5 mx-auto">
                    <p className="lg:text-5xl sm:text-2xl font-bold lg:w-96 w-40 tracking-wider">
                      {i.title}
                    </p>
                    <p className="">{i.discribtion}</p>
                  </div>

                  <div className="flex justify-center md:justify-start py-12">
                    <a
                      href="/#"
                      className="bg-transparent  px-5 py-2 rounded-3xl border-[#18b189] border hover:bg-[#18b189] text-[#001039]  md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
                      role="button"
                    >
                      {i.comoany}
                    </a>
                  </div>
                </div>
                <div>
                  <img src={i.img} alt="" className="lg:w-96 w-40 mx-auto" />
                </div>
              </div>
            </>
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default Crouseal;
