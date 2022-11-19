import React from "react";
import firsrt from "../../img/first1.png";
import secound from "../../img/secound.jpg";
import se from "../../img/se.jpg";
import google from "../../img/google.jpg";
import baba from "../../img/baba.jpg";
import chrom from "../../img/chrom.png";
import AOS from "aos";

function New() {
  AOS.init();
  const team = [
    {
      id: 0,
      img: firsrt,
      name: "A Complete Guide To The Google Algorithm Updates 2022",
      description: "Founder & CEO",
      company: " SEO",
    },
    {
      id: 1,
      img: secound,
      name: "How Can SEO Help Your Business?",
      description: "Co-Founder, Creative Director",
      company: " SEO",
    },
    {
      id: 2,
      img: se,
      name: "A Guide to GA4 Analytics vs Universal Analytics",
      description: "Artist",
      company: " SEO",
    },
    {
      id: 3,
      img: google,
      name: "6 Social Media Marketing Tools Every Content Creator Needs",
      description: "Web 3",
      company: "SOCIAL MEDIA",
    },
    {
      id: 4,
      img: chrom,
      name: "10 Must-Have SEO Extensions For Google Chrome",
      description: "Web 3",
      company: " SEO",
    },
    {
      id: 5,
      img: baba,
      name: "Drewselstinian",
      description: "Back End Developer",
      company: " SEO",
    },
  ];

  return (
    <div className="py-10 bg-white flex justify-center flex-col items-center">
      <div>
        <p className="text-[#001039] text-3xl font-normal text-center">
          What's
          <span className="text-[#001039] font-bold"> New </span>
        </p>
      </div>

      <hr className="mt-10 w-16 h-2 border-b border-[#18b189]" />
      <div className="gap-10 md:p-4 p-0 md:px-0 px-2 flex flex-wrap justify-center ">
        {team.map((items, key) => (
          <div
            className="w-full max-w-sm bg-[#4e54c8] hover:bg-[#4e54c8] hover:bg-opacity-70 rounded-lg  shadow-lg  mt-16   hover:-translate-y-1 hover:scale-110 duration-700 hover:shadow-2xl"
            key={key}
          >
            <div
              className="flex flex-col items-start gap-3 pb-10 py-7 transition ease-in-out delay-150 p-3"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                className="mb-3 w-full h-full rounded-md shadow-lg"
                src={items.img}
                alt="Bonnie"
              />
              <a
                href="/#"
                className="bg-transparent  px-5 py-1 rounded-3xl border-[#18b189] border hover:bg-[#18b189] text-[#001039]  md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
                role="button"
              >
                {items.company}
              </a>
              <h5 className="mb-1 text-xl font-bold member-name">
                {items.name}
              </h5>
              {/* <span className="text-sm ">{items.description}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default New;
