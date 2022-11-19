import React from "react";
import marketing from "../../img/marketing.png";
import AOS from "aos";
import { Link } from "react-router-dom";

function Marketing() {
  AOS.init();

  const marketingdata = [
    {
      id: 0,
      conntent: "Market analysis of your business and its approach",
    },
    {
      id: 1,
      conntent: "Create a Strategy",
    },
    {
      id: 2,
      conntent:
        "Use a bunch of the latest techniques and tools to grow the online presence of your business",
    },
    {
      id: 3,
      conntent:
        "Understanding why and where you are lacking behind your competitors and fill the gap.",
    },
  ];

  return (
    <div className="container mx-auto mt-14">
      <div className="flex lg:flex-row flex-col justify-around ">
        <div data-aos="fade-up" data-aos-duration="3000" className="my-auto">
          <img
            src={marketing}
            alt=""
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 2xl:w-full xl:w-72 w-4/5 mx-auto"
          />
        </div>
        <div
          className="mx-auto mt-5 px-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="text-[#001039] text-3xl font-normal">
            <span className="text-[#001039] text-2xl font-semibold ">
              Marketing Solutions
            </span>
            for Your Business
          </p>
          <hr className="my-10 w-16 h-2 border-b border-[#18b189]" />
          <p className="lg:w-96 font-normal text-[#001039] text-justify">
            <span className="text-[#001039] font-bold">
              Digital marketing agency in Surat
            </span>{" "}
            goes through in-depth research to analyze your position in the
            market and understand your needs. Hence, we develop tailored
            solutions to bridge the gap between your product/service and your
            customers. Here are few things that we cover:
          </p>
          <ul className="mt-8 lg:w-96 text-justify">
            <li className="flex flex-col  items-start ">
              {marketingdata.map((i) => (
                <>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[#18b189]"></i>
                    <p className="text-[#001039] text-base">{i.conntent}</p>
                  </div>
                </>
              ))}
            </li>
            <p>
              At Tale-B — A{" "}
              <span className="text-[#001039] font-bold">
                Digital Marketing Company In Surat
              </span>
              , You got everything you want.
            </p>
          </ul>
          <div className="flex py-12">
            <Link
              to="/contact"
              className="bg-transparent  px-5 py-2 rounded-3xl border-[#18b189] border hover:bg-[#18b189] text-[#001039]  md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
