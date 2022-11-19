import React, { useState } from "react";
import { Link } from "react-router-dom";
import t from "../img/t.jpg";
function Header() {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <div className=" px-3 py-2 bg-[#18b189]">
        <div className="container mx-auto">
          <div className="flex  justify-center items-center p-2 text-[#001039] ">
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
              {/* <div className="flex gap-2 items-center hover:text-[#4e54c8]">
                <p>
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p>+91 97126 08708</p>
              </div> */}
              <div className="flex gap-2 items-center text-[#001039] hover:text-[#4e54c8] ">
                <p>
                  <i className="fa-regular fa-envelope"></i>
                </p>
                <a href="mailto:Info@taleb.in">Info@taleb.in</a>
              </div>
            </div>
            {/* <div>
              <ul className="flex gap-5 ">
                <li>
                  <a href="https://www.facebook.com/" target="__Blanck__">
                    <i className="fa-brands  fa-facebook hover:text-[#4e54c8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="__Blanck__">
                    <i className="fa-brands fa-instagram hover:text-[#4e54c8]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="__Blanck__">
                    <i className="fa-brands fa-linkedin-in hover:text-[#4e54c8]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      <div className="border-b border-[#001039] bg-[#18b189]">
        <header className="h-20 bg ">
          <nav className="relative px-2 py-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="flex items-center gap-5">
                <img src={t} alt="Tailwindcss Navigation" className="w-14" />
                <p className="text-2xl font-bold text-[#001039]">Tale-B</p>
              </Link>

              <ul className="hidden md:flex space-x-6 text-[#001039] font-semibold z-50">
                <li className="hover:border-b border-[#4e54c8]">
                  <Link to="/">Home</Link>
                </li>

                <li className="flex relative group hover:border-b border-[#4e54c8]">
                  <Link to="/services" className="mr-1">
                    Services
                  </Link>
                </li>

                <li className="hover:border-b border-[#4e54c8]">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <Link
                to="/contact"
                className="bg-transparent  px-5 py-2 rounded-3xl border-[#001039] border hover:bg-[#001039] text-[#001039] hidden md:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 hover:text-white"
                role="button"
              >
                Get a Quote
              </Link>

              {/* <!-- Mobile menu icon --> */}
              <div className="  lg:hidden px-5 ">
                <i
                  className={`${
                    toggle ? "hidden" : "block fa-solid fa-bars  text-2xl"
                  }`}
                  onClick={() => settoggle(!toggle)}
                ></i>
                {toggle && (
                  <i
                    className="fa-solid fa-xmark text-2xl  "
                    onClick={() => settoggle(!toggle)}
                  ></i>
                )}
              </div>
            </div>

            {/* <!-- Mobile menu --> */}
            {toggle && (
              <div className="md:hidden flex justify-center mt-3 w-full ">
                <div
                  id="mobile-menu"
                  className="mobile-menu absolute top-23 w-full z-[999]"
                >
                  <ul className="bg-gray-100 shadow-lg leading-9  h-full text-[#001039] font-semibold">
                    <li className="border-b-2 border-white hover:bg-[#18b189] hover:text-white pl-4">
                      <Link
                        to="/"
                        className="block pl-7"
                        onClick={() => settoggle(!toggle)}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="border-b-2 border-white hover:bg-[#18b189] hover:text-white">
                      <Link
                        to="/services"
                        className="block pl-11"
                        onClick={() => settoggle(!toggle)}
                      >
                        Services
                      </Link>
                    </li>

                    <li className="border-b-2 border-white hover:bg-[#18b189] hover:text-white pl-4">
                      <Link
                        to="/contact"
                        className="block pl-7"
                        onClick={() => settoggle(!toggle)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
