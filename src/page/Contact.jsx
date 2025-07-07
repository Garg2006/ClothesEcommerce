import React from "react";
import { assets } from "../assets/assets";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/footer";

const Contact = () => {
  return (
    <div className="max-w-6xl m-auto">
      <div className="flex items-center justify-center gap-2 mb-3 text-2xl pt-8 ">
        <p className="text-gray-500">
          CONTACT
          <span className="text-gray-700 font-medium"> US</span>
        </p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <div>
          <img src={assets.contact_img} alt="" className="md:max-w-[450px]" />
        </div>
        <div className="flex flex-col gap-6 items-start">
          <b className="text-gray-800">Our Mission</b>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>
          <b>Careers at Forever</b>
          <p>Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Contact;
