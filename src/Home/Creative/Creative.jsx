import React from "react";
import marketing from "../../img/Creative.png";
import AOS from "aos";
import { Link } from "react-router-dom";
function Creative() {
  AOS.init();
  const marketingdata = [
    {
      id: 0,
      conntent:
        "Our digital marketing services are coming with guaranteed results in the desired time frame.",
    },
    {
      id: 1,
      conntent:
        "Along with better organic listing, we keep close track of traffics coming to your website.",
    },
    {
      id: 2,
      conntent:
        "We also ensure the desired traffic coming to your website should become a conversion.",
    },
    {
      id: 3,
      conntent:
        "Our professionals classify the works according to the niche, business area, targeted audiences, prospects, and more before initiating plans.",
    },
    {
      id: 5,
      conntent:
        "We ensure the content, images, and videos present on your website should convey appealing and interactive messages to your existing and potential customers.",
    },
    {
      id: 6,
      conntent:
        "We are a top SEO company in Surat. We specialize in providing quality SEO services that will help you grow your business.",
    },
    {
      id: 7,
      conntent:
        "After completing the works, we compare the expected results and actual results at frequent intervals.",
    },
    {
      id: 8,
      conntent:
        "Finally, we are a leading digital marketing company in Surat that craves to reach the highest level of perfection.",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto pt-14">
          <div className="flex lg:flex-row flex-col justify-around ">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="my-auto"
            >
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
                  Creative Challenges
                </span>
                are Our Passion
              </p>
              <hr className="my-10 w-16 h-2 border-b border-[#18b189]" />
              <p className="lg:w-96 font-normal text-[#001039] text-justify">
                <span className="text-[#001039] font-bold">
                  Digital marketing agency in Surat{" "}
                </span>
                Businesses face a few challenges in recent years, and our Top
                Digital Marketing Agency’s executives have found out how to beat
                those challenges.
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
                  to="/services"
                  className="bg-transparent  px-5 py-2 rounded-3xl border-[#18b189] border hover:bg-[#18b189] text-[#001039]  md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
                  role="button"
                >
                  Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center md:justify-around justify-center google text-white py-12 gap-10 px-5">
        <div>
          <p className="text-3xl mb-3">
            Need a <span className="font-bold">Consultation</span>?
          </p>
          <p>
            We can give you lots of advantages, from which you will surely
            benefit.
          </p>
        </div>
        <div>
          <Link
            to="/contact"
            className="bg-transparent  px-5 py-2 rounded-3xl border-[#18b189] border hover:bg-[#18b189] text-[#001039]  md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Creative;
