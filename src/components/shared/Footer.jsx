import logo from "../../assets/icon.png";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import flag from '../../assets/us.png'
const Footer = () => {
  return (
    <footer className="bg-black mt-16">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} className="w-12" alt="" />
              <h2 className="text-3xl font-bold text-white">Furni<span className="text-blue-500 font-bold">Flex</span></h2>
            </div>

          
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-200">About Us</p>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    className="text-[#81859f] transition hover:text-gray-400/75"
                    href="#"
                  >
                    Master Plan{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    Job
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    Invest
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    Pressroom
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-200">Explore EEVE</p>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    Unlock my Robot Power{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    StarLight
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    Robot Platform
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    EEVE Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-200">
                Community & Support
              </p>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    Willow X Community
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    Developer & Maker Access
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 transition hover:text-gray-400/75"
                    href="#"
                  >
                    {" "}
                    Special Cases{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-100 pt-8 flex justify-between items-center">
         <div className="flex gap-4">
            <FaFacebook className=" text-white" size={24}/>
            <FaSquareInstagram className=" text-white" size={24}/>
            <FaXTwitter className=" text-white" size={24}/>
         </div>
         <ul className="flex items-center gap-3">
            <li className="text-slate-400">March22 Recap</li>
            <li className="text-slate-400">Privacy Policy</li>
            <li className="text-slate-400">General Terms</li>
            <li className="text-slate-400">Contact</li>
         </ul>
         <div className="flex gap-1 items-center">
            <img src={flag} className="h-5 w-5" alt="" />
            <h2 className=" text-slate-400">United States (English)</h2>
         </div>
        </div>
        <div>
            <h2 className="text-slate-400 text-center text-lg mt-8 mb-2">EEVE © 2024. All rights reserved.</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
