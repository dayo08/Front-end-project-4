import React from "react";
import AOS from "aos";
import marketing from "../../img/agency.png";
import { Link } from "react-router-dom";
function Agency() {
  AOS.init();
  const marketingdata = [
    {
      id: 0,
      conntent:
        "Our expert brains have dealt with several brands and clients and seen them growing.",
    },
    {
      id: 1,
      conntent:
        "We stay updated with what’s going around and use the knowledge for brand awareness.",
    },
    {
      id: 2,
      conntent:
        "We make sure you get quality results in a short time so that you don’t have to wait for long.",
    },
    {
      id: 3,
      conntent:
        " Every single penny you pay is worthy as you get the most out of our service.",
    },
    {
      id: 4,
      conntent:
        " The team keeps an eye on the progress and creates reports at frequent intervals to ensure you are never left behind. Hence, we are the first the best digital marketing agency for startups.",
    },
    {
      id: 5,
      conntent:
        " The team works to outreach the right audience and help with mutual profits",
    },
  ];

  return (
    <div className="bgagency">
      <div className="container mx-auto mt-14">
        <div className="flex lg:flex-row flex-col justify-around ">
          <div
            className="mx-auto mt-5 px-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="text-[#001039] text-3xl font-normal">
              <span className="text-[#001039] text-2xl font-semibold ">
                Why choose our marketing
              </span>
              agency for your projects ?
            </p>
            <hr className="my-10 w-16 h-2 border-b border-[#18b189]" />
            <p className="lg:w-96 font-normal text-[#001039] text-justify">
              For those looking around for the best results to enhance ROI and
              win customers’ loyalty with Digital Marketing Services in Surat,it
              is never difficult to find marketing agencies you can hire. But
              why only us?
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
            <div className="flex py-12 ">
              <Link
                to="/contact"
                className="bg-transparent  px-5 py-2 rounded-3xl border-[#18b189] border hover:bg-[#18b189] text-[#001039]  md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
              >
                Order Service
              </Link>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="lg:order-none order-first my-auto"
          >
            <img
              src={marketing}
              alt=""
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 2xl:w-full xl:w-72 w-4/5 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
