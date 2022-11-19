import React from "react";
import  flaticotdata from '../../img/flaticotdata.png'
import  flaticonbanner from '../../img/flaticon-banner.png'
import Advertising from "../../img/1998087.png";
import AOS from "aos";
function About() {
  AOS.init();
  const about = [
    {
      id: 0,
      img: flaticotdata,
      title: "All Night",
      describe: "SEO Optimization",
      active: `Small or large, Tale-B Digital Marketing Agency aims at keeping your online business at the top of the search engines. Get ready to show up in top search results and grab your audience’s eyeballs with us as we are the best Digital Marketing Agency in Surat.`,
    },
    {
      id: 0,
      img: flaticonbanner,
      title: "All Night",
      describe: "Email Marketing  ",
      active: `Our young minds read the latest trends and apply incredible techniques to your business to reach gazillions of people in seconds. We strategize, create, send and analyze email campaigns at a minimal cost that makes us a Top Digital Marketing Company in Surat.`,
    },
    {
      id: 0,
      img: Advertising,
      title: "All Night",
      describe: "Social Media Marketing ",
      active: `We put in efforts to keep you on every mouth and broaden your reach on social media platforms. From audit to campaigns, we do everything to promote your brand awareness and help you to get a better ROI.
           `,
    },
  ];

  return (
    <div
      className="flex 2xl:justify-around container justify-center mx-auto p-16 flex-wrap items-center  gap-10"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {about.map((itemes) => (
        <div className="frame transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-1000">
          <header className="frame-header">
            <div className="image ">
              <img className="album-artwork" src={itemes.img} alt="" />
            </div>
          </header>
          ``
          <div className="frame-lyrics">
            <div className="active text-center">{itemes.describe}</div>
            <div>{itemes.active}</div>
          </div>
          <div className="frame-bg">
            <img className="bg-color album-artwork" src={itemes.img} alt="" />
            <img className="bg-black album-artwork" src={itemes.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
