import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import clients from "../../img/Clients.png";
import Business from "../../img/Business.png";
import Project from "../../img/Project.png";
function Client() {
  const [counteron, setCounterOn] = useState(false);
  return (
    <div className="py-20 container mx-auto">
      <p className="md:text-3xl text-xl font-bold text-center">
        Best Social Media Marketing Agency in Surat
      </p>
      <div
        className="mx-auto mt-5 px-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <hr className="my-10 w-16 mx-auto h-2 border-b border-[#18b189]" />

        <ul className="mt-8 xl:w-3/5 mx-auto text-justify">
          <li className="flex flex-col  items-start ">
            <p className="text-justify text-[#001039] text-base">
              Tale-B Digital Marketing is the best social media marketing agency
              in surat that can ensure a noticeable presence at social media
              sites like Facebook, Instagram, Pinterest, and whatnot.
              <span>
                We are a <strong> Facebook Ads Agency </strong>
                that helps businesses reach their customers by leveraging the
                power of Facebook.
              </span>
            </p>
            <p className="text-justify text-[#001039] text-base">
              We design our social media campaigns to help your business grow
              exponentially. We built the social media content after studying
              the business needs and analyzing the market. Our team of experts
              analyzes, evaluates, and designs social media campaigns according
              to the latest market trend and social media algorithms.
            </p>
            <p className="text-justify text-[#001039] text-base">
              Our team of experts prepares a social media marketing proposal to
              help your business generate more leads. Additionally, we can also
              create a demand for your service/product through our social media
              campaigns. We can always make your social media content go viral,
              which helps in generating more leads and a high conversion rate.
            </p>
            <p className="text-justify text-[#001039] text-base">
              We accomplish the common goals of our company and clients with
              utmost care and enthusiasm. Further, we keep our clients in the
              loop at every step to ensure complete transparency and that our
              clients can give their valuable feedback at every stage possible.
            </p>
          </li>
          <p>
            At Tale-B — A{" "}
            <span className="text-[#001039] font-bold">
              Digital Marketing Company In Surat
            </span>
            , You got everything you want.
          </p>
        </ul>
      </div>
      <div className="bg-home-counter md:mt-40 mt-20 ">
        <div className="container mx-auto  p-5">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="flex lg:flex-row flex-col items-center gap-10 justify-around text-[#001039] font-bold rounded-lg border p-4 border-[#001039]">
              <div
                data-aos={"flip-left"}
                className="flex gap-3 justify-center items-center"
              >
                <img src={clients} alt="" className="w-20" />
                <div>
                  <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                    {counteron && (
                      <CountUp start={0} end={300} duration={2} delay={0} />
                    )}
                    <span>+</span>
                  </div>
                  <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                    Happy Clients
                  </div>
                </div>
              </div>
              <div
                data-aos={"flip-left"}
                className="flex gap-3 justify-center items-center"
              >
                <img src={Business} alt="" className="w-20" />
                <div>
                  <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                    {counteron && (
                      <CountUp start={0} end={10} duration={2} delay={0} />
                    )}
                    <span>+</span>
                  </div>
                  <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                    Years in Business
                  </div>
                </div>
              </div>
              <div
                data-aos={"flip-left"}
                className="flex gap-3 justify-center items-center"
              >
                <img src={Project} alt="" className="w-20" />
                <div>
                  <div className="lg:text-6xl font-Josefin_Sans text-5xl font-bold ">
                    {counteron && (
                      <CountUp start={0} end={500} duration={2} delay={0} />
                    )}
                    <span>+</span>
                  </div>
                  <div className="mt-5 font-Roboto font-[24px] font-medium leading-[28px]">
                    Project Finished
                  </div>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
}

export default Client;
