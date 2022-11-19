import React from "react";
import SocialMedias from "../../img/SocialMedia.png";
import AOS from "aos";

function SocialMedia() {
  AOS.init();

  const marketingdata = [
    {
      id: 0,
      conntent:
        "First, we research the market for the product/service requirement.",
    },
    {
      id: 1,
      conntent:
        "Furthermore, we research low-cost keywords and hashtags that are can be helpful.",
    },
    {
      id: 2,
      conntent:
        " Moreover we with the help of our experienced content writer and graphic designer, we design a viral social media post and caption for the same, which helps us reach more potential customers.",
    },
    {
      id: 3,
      conntent:
        "With the entire blueprint of the campaign, our team runs it among the clients to ensure complete transparency and trust. Only after the nod of the client does the social media campaign go live.        ",
    },
    {
      id: 4,
      conntent:
        "Finally, we always prepare a real-time audit report of the SMM campaign to showcase the best result and improve even more.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto mt-14">
        <div className="flex lg:flex-row flex-col justify-around ">
          <div data-aos="fade-up" data-aos-duration="3000" className="my-auto">
            <img
              src={SocialMedias}
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
            <p className="text-[#001039] text-4xl font-bold">
              Social Media Marketing:
            </p>
            <hr className="my-10 w-16 h-2 border-b border-[#18b189]" />
            <p className="lg:w-96 font-normal text-[#001039] text-justify">
              Social Media Marketing is way more than uploading images, using
              hashtags, etc. It involves a series of well-analyzed steps to help
              your business grow. We at Tale-B digital marketing have bifurcated
              this process in series of steps:
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
